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
export const deleteItem = (data) => {
  return {
    type: 'DELETE_ITEM',
    payload: data,
  };
};

export const openDrawer = () => {
  return {
    type: 'OPEN_DRAWER',
  };
};

export const closeDrawer = () => {
  return {
    type: 'CLOSE_DRAWER',
  };
};
