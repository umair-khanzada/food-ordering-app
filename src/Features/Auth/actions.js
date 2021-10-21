import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_ERROR,
  FORGOT_PASSWORD,
  SIGNUP,
  MESSAGE,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  UPDATE_USER_DATA,
  RESET_PASSWORD,
  AUTH_LOADING_TOGGLE,
  UPDATE_ROLE,
} from '../../redux/ActionTypes';

export const login = (data) => ({ type: LOGIN, payload: data });

export const logout = (data) => ({ type: LOGOUT, payload: data });

export const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, payload: data });
export const loginError = () => ({ type: LOGIN_ERROR });
export const forgotPassword = (data) => ({ type: FORGOT_PASSWORD, payload: data });

export const signup = (data) => ({ type: SIGNUP, payload: data });
export const setFormMessage = (data) => ({ type: MESSAGE, payload: data });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutError = () => ({ type: LOGOUT_ERROR });
export const resetPassword = (data) => ({ type: RESET_PASSWORD, payload: data });

export const updateUserData = (data) => ({ type: UPDATE_USER_DATA, payload: data });

export const authLoadingToggle = () => ({ type: AUTH_LOADING_TOGGLE });
export const updateUserRole = (data) => ({ type: UPDATE_ROLE, payload: data });
