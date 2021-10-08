import axios from 'axios';

import { baseUrl } from '../../scripts/constants';

export async function InsertOrder(data) {
  const { orders, headers } = data;

  const res = axios.post(`${baseUrl}Orders`, orders, {
    headers,
  });

  return res;
}
