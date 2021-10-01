import { MESSAGE } from '../../redux/ActionTypes';

const initialResponseMessageState = { message: '', status: 0 };
export const responseMessage = (state = { ...initialResponseMessageState }, action) => {
  switch (action.type) {
    case MESSAGE:
      // eslint-disable-next-line no-case-declarations
      const { message, status } = action.payload;

      return { ...state, message, status };

    default:
      return state;
  }
};
