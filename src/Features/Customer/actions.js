import {
  ADD_TOCART,
  INCREMENT,
  DECREMENT,
  DELETE_ITEM,
  OPEN_DRAWER,
  CLOSE_DRAWER,
  EDIT_USER,
  GET_CARD_DATA,
  CLEAR_CART,
} from '../../redux/ActionTypes';

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

export const clearCart = () => {
  return {
    type: CLEAR_CART,
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

export const editUser = (data) => {
  return {
    type: EDIT_USER,
    payload: data,
  };
};
export const getCardData = (data) => {
  return {
    type: GET_CARD_DATA,
    payload: data,
  };
};
