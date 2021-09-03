import { SIGNUP, SIGNUP_ERROR, SIGNUP_SUCCESS } from '../../scripts/constants';

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
