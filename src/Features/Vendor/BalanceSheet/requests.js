import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

export const FetchBalances = () => {
  const vendorId = useSelector((state) => state.authReducer.id);
  return useQuery('balance', async () => {
    const {
      data: { results },
    } = await axios.get('http://localhost:4000/v1/balance');
    return results.filter((res) => res.vendorId === vendorId);
  });
};

export const FetchBalanceById = (id) => {
  const vendorId = useSelector((state) => state.authReducer.id);
  return useQuery('balance', async () => {
    const {
      data: { results },
    } = await axios.get('http://localhost:4000/v1/balance/' + id);
    return results.filter((res) => res.vendorId === vendorId);
  });
};
