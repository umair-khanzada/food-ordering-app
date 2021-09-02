export const ProfileReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'Profile': // must Proper const here
    default:
      return state;
  }
};
