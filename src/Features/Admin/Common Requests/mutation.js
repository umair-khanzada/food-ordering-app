import axios from 'axios';

import { baseUrl } from '../../../scripts/constants';

export const editUserById = async ({ id, headers, userData }) => {
  const res = await axios.patch(baseUrl + 'users/' + id, userData, {
    headers,
  });
  return res;
};

export const createUser = ({ headers, userData }) => {
  const res = axios.post(baseUrl + 'users', userData, {
    headers,
  });
  return res;
};

export const deleteUserById = async ({ id, headers }) => {
  const res = await axios.delete(baseUrl + 'users/' + id, {
    headers,
  });
  return res;
};
