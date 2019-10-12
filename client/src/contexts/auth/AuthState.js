import React, { useReducer } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

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
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const { token, isAuthenticated, loading, user, error } = state;

  // Load User

  // Register User
  const register = async formData => {
    const config = {
      header: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  };

  // Login User

  // Logout

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
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
