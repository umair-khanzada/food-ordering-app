export const loginReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'Login': // must Proper const here
    default:
      return state;
  }
};
