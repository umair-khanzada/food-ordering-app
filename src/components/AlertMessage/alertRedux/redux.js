import { TOGGLE_SNACKBAR_CLOSE, TOGGLE_SNACKBAR_OPEN } from '../../../redux/ActionTypes';

const initialState = {
  toggleSnackbar: false,
  snackbarMessage: '',
  messageType: '',
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SNACKBAR_OPEN: {
      const { payload } = action;
      const { snackbarMessage, messageType } = payload;
      return {
        ...state,
        toggleSnackbar: true,
        snackbarMessage,
        messageType,
      };
    }

    case TOGGLE_SNACKBAR_CLOSE: {
      return {
        ...state,
        toggleSnackbar: false,
        snackbarMessage: '',
        messageType: '',
      };
    }

    default:
      return state;
  }
};
export default uiReducer;
