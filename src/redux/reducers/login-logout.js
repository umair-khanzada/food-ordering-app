import { Actions } from '../actions';

export const loginLogout = (state = { isLoggedIn: false }, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return { isLoggedIn: true };

    case Actions.LOGOUT:
      return { isLoggedIn: false };

    default:
      return state;
  }
};
