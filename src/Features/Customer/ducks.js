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
      console.log(action.payload, 'id');
      // yaha per logic likho agr id phele s car ki array m he to uska qty increase kare
      // eslint-disable-next-line no-case-declarations
      const filter = state.cart.filter((elem) => elem.id === id, console.log('ele', state.cart));
      // eslint-disable-next-line no-case-declarations
      const obj = {
        id,
        name,
        price,
        img,
        qty,
      };
      state.cart.slice(id, 0, obj);
      if (filter.length > 0) {
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { id, name, price, img, qty }],
      };
    case 'INCREMENT':
      state.cart.map((element, index) => {
        if (element.id == action.payload.id) {
          state.cart[index].qty = element.qty + 1;
        }
        return element;
      });

      return { ...state, cart: [...state.cart] };

    case 'DECREMENT':
      state.cart.map((element, index) => {
        if (element.id == action.payload.id) {
          state.cart[index].qty = element.qty - 1;
        }
        return element;
      });
      return { ...state, cart: [...state.cart] };
    case 'DELETE_ITEM':
      // eslint-disable-next-line no-case-declarations
      const updCart = state.cart.filter((element) => element.id !== action.payload.id);
      return {
        ...state,
        cart: updCart,
      };

    default:
      return state;
  }
};
