import axios from 'axios';
import { useQuery } from 'react-query';

import { baseUrl, GetHeader } from '../../../scripts/constants';

const userList = async (headers, userType) => {
  const {
    data: { results },
  } = await axios.get(baseUrl + 'users', {
    headers,
  });
  return results.filter((user) => user.role == userType);
};
export const FetchUsers = (userType) => {
  const { headers } = GetHeader();

  return useQuery('users', () => userList(headers, userType));
};

const userById = async (headers, id) => {
  const { data } = await axios.get(baseUrl + 'users/' + id, {
    headers,
  });

  return data;
};
export const FetchUserById = (id) => {
  const { headers } = GetHeader();
  return useQuery('usersById', () => userById(headers, id));
};
