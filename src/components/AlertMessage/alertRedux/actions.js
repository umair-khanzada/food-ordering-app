import { TOGGLE_SNACKBAR_CLOSE, TOGGLE_SNACKBAR_OPEN } from '../../../redux/ActionTypes';

export const toggleSnackbarOpen = (message) => ({
  type: TOGGLE_SNACKBAR_OPEN,
  payload: message,
});

export const toggleSnackbarClose = () => ({
  type: TOGGLE_SNACKBAR_CLOSE,
});
