import axios from 'axios';

import { baseUrl } from '../../scripts/constants';
//

export async function restaurants(data) {
  const { name, token } = data;

  const res = axios.post(
    baseUrl + 'kitchens',

    { name },

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res;
}

export async function items(data) {
  const {
    items,
    token: { token },
  } = data;

  const res = axios.post(
    baseUrl + 'items',

    items,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res;
}

export async function deleteitem(data) {
  const {
    id,
    token: { token },
  } = data;

  const res = axios.delete(`${baseUrl}items/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}
