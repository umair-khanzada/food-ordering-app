import { ADD_RESTAURANT, MESSAGE, ADD_ITEM, DELETE_ITEM } from '../../redux/ActionTypes/index';

export const addRestaurant = (data) => ({ type: ADD_RESTAURANT, payload: data });

export const formMessage = (data) => ({ type: MESSAGE, payload: data });

export const additem = (data) => ({ type: ADD_ITEM, payload: data });

export const deleteitem = (data) => ({ type: DELETE_ITEM, payload: data });

// export const saveRestaurant = (data) => ({ type: SAVE_RESTAURANT, payload: data });
