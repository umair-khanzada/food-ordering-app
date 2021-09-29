export const toggleSnackbarOpen = (message) => ({
  type: 'TOGGLE_SNACKBAR_OPEN',
  message,
});

export const toggleSnackbarClose = () => ({
  type: 'TOGGLE_SNACKBAR_CLOSE',
});
