import { LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR, FORGOT_PASSWORD } from '../../scripts/constants';

export const login = (data) => ({ type: LOGIN, payload: data });

export const logout = () => ({ type: LOGOUT });

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginError = () => ({ type: LOGIN_ERROR });
export const forgotPassword = (data) => ({ type: FORGOT_PASSWORD, payload: data });
