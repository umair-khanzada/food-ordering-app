import { LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR, FORGOT_PASSWORD, SIGNUP } from '../../scripts/constants';

export const loginReducer = (state = { isLoggedIn: false, token: '', name: '' }, action) => {
  switch (action.type) {
    case LOGIN:
      return {};

    case LOGOUT:
      return { isLoggedIn: false, token: '', name: '' };

    case LOGIN_SUCCESS:
      return { isLoggedIn: true, token: action.payload.token, name: action.payload.name };

    case LOGIN_ERROR:
      return { isLoggedIn: false, token: '', name: '' };

    case SIGNUP: // must Proper const here
      return {};

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
