export const addtocart = (data) => {
  return {
    type: 'ADD_TOCART',
    payload: {
      ...data,
    },
  };
};
