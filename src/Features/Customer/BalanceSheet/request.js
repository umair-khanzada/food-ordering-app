import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { baseUrl } from '../../../scripts/constants';

export const FetchBalances = () => {
  const userId = useSelector((state) => state.authReducer.id);

  return useQuery('balance', async () => {
    const { data } = await axios.get(baseUrl + 'balance/user/' + userId);

    const filteredData = [];
    data.map((item) => {
      filteredData.push({
        name: item.vendorId.name,
        amount: item.amount,
        id: item.id,
      });
    });

    return filteredData;
  });
};
