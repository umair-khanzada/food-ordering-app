import axios from 'axios';

import { baseUrl } from '../../../scripts/constants';
export async function deleteRestaurant(data) {
  const { restaurantId, headers } = data;

  const res = axios.delete(`${baseUrl}kitchens/${restaurantId}`, {
    headers,
  });

  return res;
}

export async function updateRestaurantById(data) {
  const {
    restaurant,
    restaurantsId: { id },
    headers,
  } = data;

  const res = axios.patch(`${baseUrl}kitchens/${id}`, restaurant, {
    headers,
  });

  return res;
}
