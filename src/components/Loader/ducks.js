import { HIDE_LOADER, SHOW_LOADER } from './ActionTypes';

const initialLoaderState = { isLoading: false };

export const loaderReducer = (state = { ...initialLoaderState }, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };

    case HIDE_LOADER:
      return {
        ...state,
        ...initialLoaderState,
      };

    default:
      return state;
  }
};
