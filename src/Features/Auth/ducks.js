/* eslint-disable no-case-declarations */
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, MESSAGE, FORGOT_PASSWORD } from '../../redux/ActionTypes';

const initialAuthState = { isLoggedIn: '', accessToken: '', refreshToken: '', name: '' };
const initialForgotPasswordState = { message: '', status: 0 };
const initialResponseMessageState = { message: '', status: 0 };

export const authReducer = (state = { ...initialAuthState }, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return { ...initialAuthState };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        name: action.payload.name,
      };

    case LOGIN_ERROR:
      return { ...initialAuthState };

    default:
      return state;
  }
};

export const forgotPassword = (state = { ...initialForgotPasswordState }, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {};

    default:
      return state;
  }
};

export const responseMessage = (state = { ...initialResponseMessageState }, action) => {
  switch (action.type) {
    case MESSAGE:
      const { message, status } = action.payload;

      return { ...state, message, status };

    default:
      return state;
  }
};
