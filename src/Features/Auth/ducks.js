import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP, LOGOUT_SUCCESS } from '../../redux/ActionTypes';

export const authReducer = (state = { isLoggedIn: false, token: '', name: '' }, action) => {
  switch (action.type) {
    case LOGIN:
      return {};

    case LOGOUT_SUCCESS:
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
