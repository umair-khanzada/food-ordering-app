import { LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR, FORGOT_PASSWORD } from '../../scripts/constants';

export const loginReducer = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {};

    case LOGOUT:
      return { isLoggedIn: false };

    case LOGIN_SUCCESS:
      return { isLoggedIn: true };

    case LOGIN_ERROR:
      return { isLoggedIn: false };

    default:
      return state;
  }
};

export const forgotPassword = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      console.log('hell');
      return state;
    default:
      return state;
  }
};
