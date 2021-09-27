import axios from 'axios';
import { useQuery } from 'react-query';

import { AuthToken } from '../../scripts/constants';
import { baseUrl } from '../../scripts/constants';

const Categories = async (token) => {
  const res = await axios.get(baseUrl + 'categories', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res;
};

export const FetchCategories = () => {
  const { token } = AuthToken();
  const { status, isLoading, isError, error, data, isFetching, isPreviousData } = useQuery('categories', () =>
    Categories(token),
  );

  return data;
};
