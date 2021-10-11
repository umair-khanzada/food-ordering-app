import axios from 'axios';
import { useMutation } from 'react-query';

import { baseUrl, GetHeader } from '../../../scripts/constants';

export const EditBalanceById = () => {
  const { headers } = GetHeader();

  return useMutation(
    async ({ id, data }) => {
      const response = await axios.patch(baseUrl + 'balance/' + id, data, {
        headers,
      });
      return response;
    },

    {
      onSuccess: () => {
        // success!
      },
      onError: () => {
        // An error happened!
      },
    },
  );
};

export const DeleteBalanceById = () => {
  const { headers } = GetHeader();

  return useMutation(
    async (id) => {
      const response = await axios.delete(baseUrl + 'balance/' + id, {
        headers,
      });
      return response;
    },

    {
      onSuccess: () => {
        // success!
      },
      onError: () => {
        // An error happened!
      },
    },
  );
};
