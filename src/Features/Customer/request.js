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

export const itemsByVendor = async (headers, vendorId) => {
  if (vendorId !== '') {
    const { data } = await axios.get(baseUrl + 'items ', {
      headers,
    });

    return data.filter(({ createdBy }) => createdBy == vendorId);
  }
};

// export const GetItemsByVendor = (vendorId) => {
//   const { headers } = GetHeader();
//   const dispatch = useDispatch();

//   return
// };
const orderHistory = async (headers, user_Id) => {
  const { data: orders } = await axios.get(baseUrl + 'orders/user/' + user_Id, {
    headers,
  });
  const structuredData = [];
  orders.map(({ items, vendorId, status, amount, id }) => {
    const itemsArray = [];
    items.map((item) => {
      const parseItem = JSON.parse(item);
      itemsArray.push(parseItem);
    });

    structuredData.push({
      id,
      name: vendorId.name,
      items: itemsArray,
      status,
      price: amount,
    });
  });

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
