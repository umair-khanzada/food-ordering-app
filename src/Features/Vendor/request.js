import axios from 'axios';
import { useQuery } from 'react-query';

import { AuthToken } from '../../scripts/constants';
import { baseUrl } from '../../scripts/constants';

const Restaurants = async (token) => {
  const res = await axios.get(baseUrl + 'kitchens', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res;
};

export const FetchRestaurants = () => {
  const { token } = AuthToken();
  const { status, isLoading, isError, error, data, isFetching, isPreviousData } = useQuery('restaurants', () =>
    Restaurants(token),
  );

  return data;
};

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

const Items = async (token) => {
  const res = await axios.get(baseUrl + 'items', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res;
};

export const FetchItems = () => {
  const { token } = AuthToken();
  const { status, isLoading, isError, error, data, isFetching, isPreviousData } = useQuery('items', () => Items(token));

  return data;
};
