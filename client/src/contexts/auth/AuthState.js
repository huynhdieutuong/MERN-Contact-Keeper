import React, { useReducer } from "react";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
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

  // Login User

  // Logout

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        loading,
        user,
        error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
