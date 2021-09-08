export const addtocart = (data) => {
  return {
    type: 'ADD_TOCART',
    payload: {
      ...data,
    },
  };
};
export const increaseQuantity = (data) => {
  return {
    type: 'INCREMENT',
    payload: data,
  };
};
export const decreaseQuantity = (data) => {
  return {
    type: 'DECREMENT',
    payload: data,
  };
};
