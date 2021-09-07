const initialData = {
  cart: [],
};
const addtocartReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TOCART':
      // eslint-disable-next-line no-case-declarations
      const { id, name, price, img } = action.payload;
      return {
        cart: [...state.cart, { id, name, price, img }],
      };
    default:
      return state;
  }
};
export default addtocartReducers;
