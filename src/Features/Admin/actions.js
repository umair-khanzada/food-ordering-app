import { ADD_CATEGORY, MESSAGE } from '../../redux/ActionTypes';

export const addCategory = (data) => ({ type: ADD_CATEGORY, payload: data });
export const formMessage = (data) => ({ type: MESSAGE, payload: data });
