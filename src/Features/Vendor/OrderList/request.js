import axios from 'axios';
import { useQuery } from 'react-query';

import { baseUrl, GetHeader } from '../../../scripts/constants';

const orderList = async (headers) => {
  const {
    data: { results },
  } = await axios.get(baseUrl + 'orders', {
    headers,
  });

  return results;
};

export const OrderHistoryListApi = () => {
  const { headers } = GetHeader();
  const query = useQuery('orders', () => orderList(headers));
  return query;
};
