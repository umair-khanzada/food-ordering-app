import axios from 'axios';
import { useQuery } from 'react-query';

import { AuthToken } from '../../scripts/constants';
import { baseUrl } from '../../scripts/constants';

const Categories = async (token) => {
  const res = axios.get(baseUrl + 'categories', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res;
};

export const FetchCategories = () => {
  const { token } = AuthToken();

  return useQuery('categories', () => Categories(token));
};
