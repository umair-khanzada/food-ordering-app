/* eslint-disable no-case-declarations */
import {
  ADD_TOCART,
  CLEAR_CART,
  CLOSE_DRAWER,
  DECREMENT,
  DELETE_ITEM,
  INCREMENT,
  OPEN_DRAWER,
  GET_CARD_DATA,
} from '../../redux/ActionTypes';

const initialData = {
  cart: [],
  isDrawerOpen: false,
  count: 0,
};
const cardItem = [];

export const cartItemReducer = (state = cardItem, action) => {
  switch (action.type) {
    case GET_CARD_DATA:
      return action.payload;

    default:
      return state;
  }
};

export const addtocartReducers = (state = initialData, action) => {
  // const updatedCart = [];

  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, isDrawerOpen: true };

    case CLOSE_DRAWER:
      return { ...state, isDrawerOpen: false };

    case ADD_TOCART: {
      const { id, name, price, img, qty, vendorId } = action.payload;

      const filter = state.cart.filter((elem) => elem.id === id);

      if (filter.length > 0) {
        state.cart.map((element, index) => {
          if (element.id === id) {
            state.cart[index].qty = element.qty + 1;
          }
          return element;
        });
        return {
          ...state,
          cart: [...state.cart],
          isDrawerOpen: true,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { id, name, price, img, qty, vendorId }],
        isDrawerOpen: true,
        count: state.cart.length + 1,
      };
    }
    case INCREMENT:
      state.cart.map((element, index) => {
        if (element.id == action.payload.id) {
          state.cart[index].qty = element.qty + 1;
        }
        return element;
      });

      return { ...state, cart: [...state.cart] };

    case DECREMENT:
      state.cart.map((element, index) => {
        if (element.id == action.payload.id) {
          state.cart[index].qty = element.qty - 1;
        }
        if (element.qty <= 0) {
          state.cart[index].qty = 1;
        }
        return element;
      });
      return { ...state, cart: [...state.cart] };

    case DELETE_ITEM: {
      const updCart = state.cart.filter((element) => element.id !== action.payload.id);
      return {
        ...state,
        cart: updCart,
      };
    }

    case CLEAR_CART:
      return {
        ...initialData,
      };

    default:
      return state;
  }
};
