import axios from 'axios';

import { baseUrl } from '../../../scripts/constants';

export const createOrder = ({ headers, orderData }) => {
  const createOrderResposnse = axios.post(baseUrl + 'orders', orderData, {
    headers,
  });

  return createOrderResposnse;
};
