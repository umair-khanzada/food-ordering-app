import axios from 'axios';

import { baseBackEndURL } from '../../../scripts/constants';

export const editUser = async ({ id, body, token }) => {
  const res = await axios.patch(baseBackEndURL + '/users/' + id, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
