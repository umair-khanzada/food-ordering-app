import axios from 'axios';

import { API_ROUTE } from '../../../scripts/constants';

export const editUser = async ({ id, body, token }) => {
  const res = await axios.patch(API_ROUTE + '/users/' + id, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
