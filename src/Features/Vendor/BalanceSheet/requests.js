import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { baseUrl } from '../../../scripts/constants';

export const FetchBalances = () => {
  const vendorId = useSelector((state) => state.authReducer.id);
  return useQuery('balance', async () => {
    const { data } = await axios.get(baseUrl + 'balance/vendor/' + vendorId);

    const structutredData = [];

    data.map((data) =>
      structutredData.push({
        user: data.userId.name,
        amount: data.amount,
        vendor: data.vendorId.name,
        vendorId: data.vendorId.id,
        userId: data.userId.id,
        id: data.id,
      }),
    );

    return structutredData;
  });
};

export const FetchBalanceById = (id) => {
  return useQuery(
    'balance/' + id,
    async () => {
      const { data } = await axios.get(baseUrl + 'balance/' + id);
      return data;
    },
    {},
  );
};
