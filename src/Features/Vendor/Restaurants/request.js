import axios from 'axios';
import { useQuery } from 'react-query';

import { GetHeader } from '../../../scripts/constants';
import { baseUrl } from '../../../scripts/constants';
const Restaurants = async (headers) => {
  const { data } = await axios.get(baseUrl + 'kitchens', {
    headers,
  });

  return data;
};

export const FetchRestaurants = () => {
  const { headers } = GetHeader();

  return useQuery('restaurants', () => Restaurants(headers));
};

const RestaurantsById = async (headers, id) => {
  const { data } = await axios.get(baseUrl + 'kitchens/' + id, {
    headers,
  });

  return data;
};
export const FetchRestaurantsById = (id) => {
  const { headers } = GetHeader();

  return useQuery('restaurants', () => RestaurantsById(headers, id));
};
