import { CLOSEMODAL, OPENMODAL } from '../../redux/ActionTypes';

const initialState = {
  isToggleModal: false,
};

export const modalReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case OPENMODAL:
      return {
        isToggleModal: true,
      };
    case CLOSEMODAL: {
      return {
        isToggleModal: false,
      };
    }
    default: {
      return state;
    }
  }
};
