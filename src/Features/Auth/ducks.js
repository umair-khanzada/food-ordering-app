import { LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR, SIGNUP } from '../../scripts/constants';

export const loginReducer = (state = { isLoggedIn: false, token: '' }, action) => {
  switch (action.type) {
    case LOGIN:
      return {};

    case LOGOUT:
      return { isLoggedIn: false, token: '' };

    case LOGIN_SUCCESS:
      return { isLoggedIn: true, token: { ...action.payload } };

    case LOGIN_ERROR:
      return { isLoggedIn: false, token: '' };

    case SIGNUP: // must Proper const here
      return {};

    default:
      return state;
  }
};
