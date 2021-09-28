import axios from 'axios';

import { baseUrl } from '../../../scripts/constants';

export const editUserById = async ({ id, token, userData }) => {
  const res = await axios.patch(baseUrl + 'users/' + id, userData, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
};

export const createUser = async ({ token, userData }) => {
  const res = await axios.post(baseUrl + 'users', userData, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
};

export const deleteUserById = async ({ id, token }) => {
  const res = await axios.delete(baseUrl + 'users/' + id, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
};
