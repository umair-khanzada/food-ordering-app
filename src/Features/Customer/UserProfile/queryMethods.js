import { baseBackEndURL } from '../../../scripts/constants';

export const editUser = async ({ id, body, token }) => {
  const res = await fetch(baseBackEndURL + '/users/' + id, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
