import axios from 'axios';

import { baseUrl } from '../../scripts/constants';

export async function restaurants(data) {
  const { name, headers } = data;

  const res = axios.post(
    baseUrl + 'kitchens',

    { name },

    {
      headers,
    },
  );

  return res;
}

export async function items(data) {
  const { items, headers } = data;

  const res = axios.post(
    baseUrl + 'items',

    items,

    {
      headers,
    },
  );

  return res;
}

export async function deleteitem(data) {
  const { itemId, headers } = data;

  const res = axios.delete(`${baseUrl}items/${itemId}`, {
    headers,
  });

  return res;
}

export async function updateItemById(data) {
  const {
    items,
    itemsById: { id },
    headers,
  } = data;

  const res = axios.patch(`${baseUrl}items/${id}`, items, {
    headers,
  });

  return res;
}
export const deleteOrderById = async (id) => {
  const deleteOrderRes = await axios.delete(baseUrl + 'orders/' + id);
  return deleteOrderRes;
};

export const updateOrderById = async ({ id, updatedOrder }) => {
  const updatedOrderRes = await axios.patch(baseUrl + 'orders/' + id, updatedOrder);
  return updatedOrderRes;
};
export async function InsertBalance(totalBalance) {
  const res = axios.post(`${baseUrl}balance`, totalBalance);

  return res;
}
