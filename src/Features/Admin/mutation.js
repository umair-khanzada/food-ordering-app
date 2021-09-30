import axios from 'axios';

import { baseUrl } from '../../scripts/constants';
export async function category(data) {
  const {
    category,

    token: { token },
  } = data;

  const res = await axios.post(
    baseUrl + 'categories',

    category,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return res;
}

export async function deleteCategory(data) {
  const {
    id,
    token: { token },
  } = data;

  const res = await axios.delete(`${baseUrl}categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
}
