import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FORGOT_PASSWORD,
  MESSAGE,
  LOGOUT_SUCCESS,
  UPDATE_USER_DATA,
  LOGIN,
  SIGNUP,
} from '../../redux/ActionTypes';

const initialAuthState = {
  isLoggedIn: false,
  id: '',
  email: '',
  accessToken: '',
  refreshToken: '',
  name: '',
  role: '',
  contact: '',
  isLoading: false,
};
const initialForgotPasswordState = { message: '', status: 0 };
const initialResponseMessageState = { message: '', status: 0 };

export const authReducer = (state = { isLoggedIn: false, user: {} }, action) => {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
      return { ...state, isLoading: true };

    case LOGOUT_SUCCESS:
      return { ...initialAuthState };

    case LOGIN_SUCCESS: {
      const { accessToken, refreshToken, name, role, id, email, contact } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        id,
        email,
        accessToken,
        refreshToken,
        name,
        role,
        contact,
        isLoading: false,
      };
    }

    case LOGIN_ERROR:
      return { ...initialAuthState };

    case UPDATE_USER_DATA: {
      const { name, email, contact } = action.payload;
      return {
        ...state,
        name,
        email,
        contact,
      };
    }

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
    case MESSAGE: {
      const { message, status } = action.payload;

      return { ...state, message, status };
    }

    default:
      return state;
  }
};
