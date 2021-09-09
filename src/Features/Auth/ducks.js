import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from '../../redux/ActionTypes';

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
