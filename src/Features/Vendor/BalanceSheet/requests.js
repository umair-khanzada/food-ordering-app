import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { baseUrl } from '../../../scripts/constants';

export const FetchBalances = () => {
  const vendorId = useSelector((state) => state.authReducer.id);
  return useQuery('balance', async () => {
    const { data } = await axios.get(baseUrl + 'balance');
    const filteredData = data.filter((res) => res.vendorId.id === vendorId);
    const structutredData = [];

    filteredData.map((data) =>
      structutredData.push({
        vendor: data.vendorId.name,
        vendorId: data.vendorId.id,
        user: data.userId.name,
        userId: data.userId.id,
        amount: data.amount,
        id: data.id,
      }),
    );
    return structutredData;
  });
};

export const FetchBalanceById = (id) => {
  return useQuery('balance/' + id, async () => {
    const { data } = await axios.get(baseUrl + 'balance/' + id);
    return data;
  });
};
