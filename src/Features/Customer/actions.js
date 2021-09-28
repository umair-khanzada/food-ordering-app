import { ADD_TOCART, INCREMENT, DECREMENT, DELETE_ITEM, OPEN_DRAWER, CLOSE_DRAWER } from '../../redux/ActionTypes';

export const addtocart = (data) => {
  return {
    type: ADD_TOCART,
    payload: data,
  };
};
export const increaseQuantity = (itemId) => {
  return {
    type: INCREMENT,
    payload: {
      id: itemId,
    },
  };
};
export const decreaseQuantity = (itemId) => {
  return {
    type: DECREMENT,
    payload: {
      id: itemId,
    },
  };
};
export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    payload: {
      id: itemId,
    },
  };
};

export const openDrawer = () => {
  return {
    type: OPEN_DRAWER,
  };
};

export const closeDrawer = () => {
  return {
    type: CLOSE_DRAWER,
  };
};