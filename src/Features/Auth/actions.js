import { LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR, SIGNUP, LOGOUT_SUCCESS } from '../../scripts/constants';

export const login = (data) => ({ type: LOGIN, payload: data });

export const logout = () => ({ type: LOGOUT });

export const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, payload: data });
export const loginError = () => ({ type: LOGIN_ERROR });

export const signup = (data) => ({ type: SIGNUP, payload: data });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
