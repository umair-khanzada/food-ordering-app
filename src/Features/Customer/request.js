import axios from 'axios';
import { useQuery } from 'react-query';

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
    const {
      data: { results },
    } = await axios.get(baseUrl + 'items ', {
      headers,
    });

    return results.filter(({ createdBy }) => createdBy == vendorId);
  }
};

export const GetItemsByVendor = (vendorId) => {
  const { headers } = GetHeader();

  return useQuery(['itemsByVendor', vendorId], () => itemsByVendor(headers, vendorId));
};
