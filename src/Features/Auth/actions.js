import { LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from '../../scripts/constants';

export const login = (data) => ({ type: LOGIN, payload: data });

export const logout = () => ({ type: LOGOUT });

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginError = () => ({ type: LOGIN_ERROR });
