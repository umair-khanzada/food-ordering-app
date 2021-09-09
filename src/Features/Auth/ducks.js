/* eslint-disable no-case-declarations */
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, MESSAGE, FORGOT_PASSWORD } from '../../redux/ActionTypes';

export const authReducer = (state = { isLoggedIn: false, token: '', name: '' }, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return { isLoggedIn: '', accessToken: '', refreshToken: '', name: '' };

    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        name: action.payload.name,
      };

    case LOGIN_ERROR:
      return { isLoggedIn: '', accessToken: '', refreshToken: '', name: '' };

    default:
      return state;
  }
};

export const forgotPassword = (state = { message: '', status: 0 }, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {};

    default:
      return state;
  }
};
export const responseMessage = (state = { message: '', status: 0 }, action) => {
  switch (action.type) {
    case MESSAGE:
      const { message, status } = action.payload;

      return { ...state, message, status };

    default:
      return state;
  }
};
