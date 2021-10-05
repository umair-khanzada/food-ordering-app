import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { baseUrl } from '../../../scripts/constants';

export const FetchBalances = () => {
  const vendorId = useSelector((state) => state.authReducer.id);
  return useQuery('balance', async () => {
    const {
      data: { results },
    } = await axios.get(baseUrl + 'balance');
    return results.filter((res) => res.vendorId === vendorId);
  });
};

export const FetchBalanceById = (id) => {
  return useQuery('balance', async () => {
    const { data } = await axios.get(baseUrl + 'balance/' + id);
    return data;
  });
};
