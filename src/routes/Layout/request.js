import axios from 'axios';
import { useQuery } from 'react-query';

import { baseUrl, GetHeader } from '../../scripts/constants';

const userById = async (headers, id, isLoggedIn) => {
  if (isLoggedIn) {
    const { data } = await axios.get(baseUrl + 'users/' + id, {
      headers,
    });
    return data;
  }
};
export const FetchUserById = (id, isLoggedIn) => {
  const { headers } = GetHeader();

  return useQuery(['usersById', id], () => userById(headers, id, isLoggedIn));
};
