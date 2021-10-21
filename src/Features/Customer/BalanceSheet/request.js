import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { baseUrl } from '../../../scripts/constants';

export const FetchBalances = () => {
  const userId = useSelector((state) => state.authReducer.id);

  return useQuery('balance', async () => {
    const { data } = await axios.get(baseUrl() + 'balance/user/' + userId);

    const filteredData = [];
    data.map((item) => {
      const { vendorId, amount, id } = item;
      if (vendorId) {
        filteredData.push({
          name: vendorId.name,
          amount,
          id,
        });
      }
    });

    return filteredData;
  });
};
