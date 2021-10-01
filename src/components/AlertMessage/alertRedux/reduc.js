const initialState = {
  toggleSnackbar: false,
  snackbarMessage: '',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SNACKBAR_OPEN': {
      return {
        ...state,
        toggleSnackbar: true,
        snackbarMessage: action.message,
      };
    }

    case 'TOGGLE_SNACKBAR_CLOSE': {
      return {
        ...state,
        toggleSnackbar: false,
        snackbarMessage: '',
      };
    }

    default: {
      return state;
    }
  }
};
export default uiReducer;
