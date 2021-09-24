import { CREATE_USER, DELETE_USER_BY_ID, FETCH_USERS, FETCH_USER_BY_ID, UPDATE_USER_BY_ID } from './ActionTypes';

export const createUser = (data) => ({ type: CREATE_USER, payload: data });
export const fetchUsers = (data) => ({ type: FETCH_USERS, payload: data });
export const fetchUserById = (data) => ({ type: FETCH_USER_BY_ID, payload: data });
export const updateUserById = (data) => ({ type: UPDATE_USER_BY_ID, payload: data });
export const deleteUserById = (data) => ({ type: DELETE_USER_BY_ID, payload: data });
