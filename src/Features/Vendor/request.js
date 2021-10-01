import axios from 'axios';
import { useQuery } from 'react-query';

import { GetHeader } from '../../scripts/constants';
import { baseUrl } from '../../scripts/constants';

const Restaurants = async (headers) => {
  const res = await axios.get(baseUrl + 'kitchens', {
    headers,
  });

  return res;
};

export const FetchRestaurants = () => {
  const { headers } = GetHeader();
  const { status, isLoading, isError, error, data, isFetching, isPreviousData } = useQuery('restaurants', () =>
    Restaurants(headers),
  );

  return data;
};

const Categories = async (headers) => {
  const res = await axios.get(baseUrl + 'categories', {
    headers,
  });

  return res;
};

export const FetchCategories = () => {
  const { headers } = GetHeader();
  const { status, isLoading, isError, error, data, isFetching, isPreviousData } = useQuery('categories', () =>
    Categories(headers),
  );

  return data;
};

const Items = async (headers) => {
  const res = await axios.get(baseUrl + 'items', {
    headers,
  });

  return res;
};

export const FetchItems = () => {
  const { headers } = GetHeader();

  return useQuery('items', () => Items(headers));
};
