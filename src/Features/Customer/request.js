import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { baseUrl, GetHeader } from '../../scripts/constants';

const Vendors = async (headers, userType) => {
  const { data } = await axios.get(baseUrl + 'users', {
    headers,
  });

  return data.filter((user) => user.role == userType);
};

const categories = async (headers) => {
  const {
    data: { results },
  } = await axios.get(baseUrl + 'categories ', {
    headers,
  });

  return results;
};

export const FetchVendors = (userType) => {
  const { headers } = GetHeader();

  return useQuery('vendors', () => Vendors(headers, userType));
};

export const GetCategories = () => {
  const { headers } = GetHeader();

  return useQuery('categories', () => categories(headers));
};

const itemsByVendor = async (headers, vendorId) => {
  if (vendorId !== '') {
    const { data } = await axios.get(baseUrl + 'items ', {
      headers,
    });

    return data.filter(({ createdBy }) => createdBy == vendorId);
  }
};

export const GetItemsByVendor = (vendorId) => {
  const { headers } = GetHeader();

  return useQuery(['itemsByVendor', vendorId], () => itemsByVendor(headers, vendorId));
};
const orderHistory = async (headers, userId) => {
  const { data } = await axios.get(baseUrl + 'orders', {
    headers,
  });
  const orders = data.filter((order) => order.userId.id == userId);

  const structuredData = [];
  orders.map((order) =>
    structuredData.push({
      id: order.id,
      vendorName: order.vendorId.name,
      items: order.items.join('\n'),
      status: order.status,
      price: order.amount,
    }),
  );
  return structuredData;
};
export const FetchOrderHistory = () => {
  const userId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });

  const { headers } = GetHeader();
  return useQuery('orders', () => orderHistory(headers, userId));
};
