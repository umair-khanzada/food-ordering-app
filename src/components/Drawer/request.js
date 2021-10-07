import axios from 'axios';
import { useQuery } from 'react-query';

import { baseUrl, GetHeader } from '../../scripts/constants';

const balanceByUserId = async (headers, user) => {
  if (user !== '') {
    const { data } = await axios.get(baseUrl + 'balance ', {
      headers,
    });

    return data.filter(({ userId: { id }, vendorId: { id: vendor } }) => id == user);
  }
};

export const GetBalanceByUserId = (userId) => {
  const { headers } = GetHeader();

  return useQuery(['balanceByUser', userId], () => balanceByUserId(headers, userId));
};
