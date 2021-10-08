import axios from 'axios';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import { baseUrl, ERROR, GetHeader, SUCCESS } from '../../../scripts/constants';

export const EditBalanceById = () => {
  const { headers } = GetHeader();
  const dispatch = useDispatch();
  const successMessage = 'Successfull balance has been updated';
  return useMutation(
    async ({ id, data }) => {
      const response = await axios.patch(baseUrl + 'balance/' + id, data, {
        headers,
      });
      return response;
    },

    {
      onSuccess: (data, variables, context) => {
        // success!
        dispatch(
          toggleSnackbarOpen({
            snackbarMessage: successMessage,
            messageType: SUCCESS,
          }),
        );
      },
      onError: (error, variables, context) => {
        // An error happened!
        const {
          response: {
            data: { message },
          },
        } = error;
        dispatch(
          toggleSnackbarOpen({
            snackbarMessage: message,
            messageType: ERROR,
          }),
        );
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
      onSuccess: (data, variables, context) => {
        // success!
      },
      onError: (error, variables, context) => {
        // An error happened!
      },
    },
  );
};
