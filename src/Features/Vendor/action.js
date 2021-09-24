import {
  ADD_RESTAURANT,
  MESSAGE,
  FETCH_RESTAURANTS,
  FETCH_CATEGORIES,
  ADD_ITEM,
  FETCH_ITEMS,
} from '../../redux/ActionTypes/index';

export const addRestaurant = (data) => ({ type: ADD_RESTAURANT, payload: data });

export const formMessage = (data) => ({ type: MESSAGE, payload: data });
export const fetchCategories = (data) => ({ type: FETCH_CATEGORIES, payload: data });
export const fetchRestaurant = (data) => ({ type: FETCH_RESTAURANTS, payload: data });
export const additem = (data) => ({ type: ADD_ITEM, payload: data });
export const fetchitems = (data) => ({ type: FETCH_ITEMS, payload: data });

// export const saveRestaurant = (data) => ({ type: SAVE_RESTAURANT, payload: data });
