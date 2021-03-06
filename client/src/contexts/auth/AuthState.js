import React, { useReducer } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import setAuthToken from "../../utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const { token, isAuthenticated, loading, user, error } = state;

  // Load User
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get("/api/auth");
      if (res.data === null) {
        dispatch({
          type: LOGOUT
        });
      } else {
        dispatch({
          type: USER_LOADED,
          payload: res.data
        });
      }
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/auth", formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg
      });

      clearErrors();
    }
  };

  // Logout
  const logout = () => {
    dispatch({
      type: LOGOUT
    });
  };

  // Clear Errors
  const clearErrors = () => {
    setTimeout(() => dispatch({ type: CLEAR_ERRORS }), 5000);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        loading,
        user,
        error,
        register,
        clearErrors,
        loadUser,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
