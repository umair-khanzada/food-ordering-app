export const ResetPasswordReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'ResetPassword': // must Proper const here
    default:
      return state;
  }
};
