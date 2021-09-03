import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_ERROR,
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from '../../scripts/constants';

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

export const SignUpReducer = (state = { isLoggedIn: false }, action) => {
  const { type } = action;
  switch (type) {
    case SIGNUP: // must Proper const here
      return {};
    case SIGNUP_SUCCESS:
      return { isLoggedIn: true };
    case SIGNUP_ERROR:
      return { isLoggedIn: false };

    default:
      return state;
  }
};
