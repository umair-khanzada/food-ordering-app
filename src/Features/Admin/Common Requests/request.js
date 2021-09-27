import axios from 'axios';
import { useQuery } from 'react-query';

import { AuthToken, baseUrl } from '../../../scripts/constants';

const userList = async (token, userType) => {
  const { data } = await axios.get(baseUrl + 'users', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return data.filter((user) => user.role == userType);
};
export const FetchUsers = (userType) => {
  const { token } = AuthToken();
  const { data, status } = useQuery('users', () => userList(token, userType));
  return data;
};

const userById = async (token, id) => {
  const { data } = await axios.get(baseUrl + 'users/' + id, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return data;
};
export const FetchUserById = (id) => {
  const { token } = AuthToken();
  const { data, status } = useQuery('usersById', () => userById(token, id));

  return data;
};
