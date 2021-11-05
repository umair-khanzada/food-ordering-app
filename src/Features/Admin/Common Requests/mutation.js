import axios from 'axios';

import { baseUrl } from '../../../scripts/constants';

export const editUserById = async ({ id, headers, userData }) => {
  const editResposnse = await axios.patch(baseUrl + `users/${id}`, userData, {
    headers,
  });
  return editResposnse;
};

export const createUser = ({ headers, userData }) => {
  const createResposnse = axios.post(baseUrl + 'users', userData, {
    headers,
  });

  return createResposnse;
};

export const deleteUserById = async ({ id, headers }) => {
  const deleteResposnse = await axios.delete(baseUrl + `users/${id}`, {
    headers,
  });
  return deleteResposnse;
};
