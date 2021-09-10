import { LOGIN_SUCCESS, LOGIN_ERROR, FORGOT_PASSWORD, MESSAGE, LOGOUT_SUCCESS } from '../../redux/ActionTypes';
// { isLoggedIn: false, token: '', name: '' }
export const authReducer = (state = { isLoggedIn: false, user: {} }, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      // return { isLoggedIn: '', accessToken: '', refreshToken: '', name: '' };
      return { isLoggedIn: '', user: '' };

    case LOGIN_SUCCESS:
      // return {
      //   isLoggedIn: true,
      //   accessToken: action.payload.accessToken,
      //   refreshToken: action.payload.refreshToken,
      //   name: action.payload.name,
      // };
      return {
        isLoggedIn: true,
        // accessToken: action.payload.accessToken,
        // refreshToken: action.payload.refreshToken,
        // name: action.payload.name,
        user: action.payload,
      };
    case LOGIN_ERROR:
      // return { isLoggedIn: '', accessToken: '', refreshToken: '', name: '' };
      return { isLoggedIn: '', user: '' };

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
      // eslint-disable-next-line no-case-declarations
      const { message, status } = action.payload;

      return { ...state, message, status };

    default:
      return state;
  }
};
