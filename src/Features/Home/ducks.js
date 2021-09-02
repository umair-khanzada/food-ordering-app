export const HomeReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'Home': // must Proper const here
    default:
      return state;
  }
};
