import { LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR } from '../../scripts/constants';

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
