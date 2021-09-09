const initialData = {
  cart: [],
  isDrawerOpen: false,
};
export const addtocartReducers = (state = initialData, action) => {
  const updatedCart = [];

  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...state, isDrawerOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, isDrawerOpen: false };
    case 'ADD_TOCART':
      // eslint-disable-next-line no-case-declarations
      const { id, name, price, img, qty } = action.payload;

      return {
        ...state,
        cart: [...state.cart, { id, name, price, img, qty }],
      };
    case 'INCREMENT':
      state.cart.map((element, index) => {
        if (element.id == action.payload) {
          state.cart[index].qty = element.qty + 1;
        }
        return element;
      });

      return { ...state, cart: [...state.cart] };

    case 'DECREMENT':
      state.cart.map((element, index) => {
        if (element.id == action.payload) {
          state.cart[index].qty = element.qty - 1;
        }
        return element;
      });
      return { ...state, cart: [...state.cart] };
    case 'DELETE_ITEM':
      // eslint-disable-next-line no-case-declarations
      const updCart = state.cart.filter((element) => element.id !== action.payload);
      return {
        ...state,
        cart: updCart,
      };

    default:
      return state;
  }
};

// export const inccartReducer = (state = initialData, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       const { id, qty } = action.payload;
//       const updatedCart = state.map((element) => {
//         if (curEle.id === action.payload) {

//         }
//       return [...state, { qty: curEle.qty + 1 }];
//     case 'DECREMENT':
//       return state;

//     default:
//       return state;
//   }
// };
