import { ADD_CATEGORY, MESSAGE, FETCH_CATEGORIES } from '../../redux/ActionTypes';

export const addCategory = (data) => ({ type: ADD_CATEGORY, payload: data });
export const formMessage = (data) => ({ type: MESSAGE, payload: data });

export const fetchCategories = (data) => ({ type: FETCH_CATEGORIES, payload: data });
