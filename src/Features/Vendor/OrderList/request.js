import axios from 'axios';
import { useQuery } from 'react-query';

import { GetHeader, baseUrl } from '../../../scripts/constants';

const balanceByUserId = async (headers, user, isUpdateOrder) => {
  if (user.length > 0 && isUpdateOrder) {
    const { data } = await axios.get(baseUrl + 'balance', {
      headers,
    });
    const newData = [];
    data.map((order) => {
      if (order.userId && order.vendorId) {
        newData.push(order);
      }
    });

    return newData.filter(({ userId: { id } }) => id == user);
  }
};

export const GetBalanceByUserId = (userId, isUpdateOrder) => {
  const { headers } = GetHeader();

  return useQuery(['balanceByUser', userId], () => balanceByUserId(headers, userId, isUpdateOrder), { retry: 1 });
};
