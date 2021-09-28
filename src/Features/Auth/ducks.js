/* eslint-disable no-case-declarations */
import { LOGIN_SUCCESS, LOGIN_ERROR, FORGOT_PASSWORD, MESSAGE, LOGOUT_SUCCESS } from '../../redux/ActionTypes';

const initialAuthState = { isLoggedIn: false, accessToken: '', refreshToken: '', name: '', role: '' };
const initialForgotPasswordState = { message: '', status: 0 };
const initialResponseMessageState = { message: '', status: 0 };

export const authReducer = (state = { ...initialAuthState }, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return { ...initialAuthState };

    case LOGIN_SUCCESS:
      const { accessToken, refreshToken, name, role } = action.payload;

      return {
        ...state,
        isLoggedIn: true,
        accessToken,
        refreshToken,
        name,
        role,
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
      // eslint-disable-next-line no-case-declarations
      const { message, status } = action.payload;

      return { ...state, message, status };

    default:
      return state;
  }
};
