import { ADD_RESTAURANT, MESSAGE } from '../../redux/ActionTypes/index';

export const addRestaurant = (data) => ({ type: ADD_RESTAURANT, payload: data });

export const formMessage = (data) => ({ type: MESSAGE, payload: data });
