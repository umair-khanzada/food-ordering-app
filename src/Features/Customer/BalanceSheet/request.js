import axios from 'axios';
import { useQuery } from 'react-query';

import { baseUrl } from '../../../scripts/constants';

export const FetchBalances = () => {
  return useQuery('balance', async () => {
    const { data } = await axios.get(baseUrl + 'balance');
    return data;
  });
};
