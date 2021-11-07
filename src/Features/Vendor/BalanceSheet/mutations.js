import axios from 'axios';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import { baseUrl, ERROR, GetHeader, SUCCESS } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';

export const editBalnceByUser = async ({ id, data, headers }) => {
  const response = await axios.patch(baseUrl + `balance/${id}`, data, {
    headers,
  });
  return response;
};

export const DeleteBalanceById = () => {
  const history = useHistory();
  const { headers } = GetHeader();
  const successMessage = 'Successfull balacne has been deleted';
  const dispatch = useDispatch();
  return useMutation(
    async (id) => {
      const response = await axios.delete(baseUrl + `balance/${id}`, {
        headers,
      });
      return response;
    },

    {
      onError: (error) => {
        const {
          response: {
            data: { message },
            status,
          },
        } = error;

        if (status === 401) {
          dispatch(logout({ history }));
          dispatch(
            toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }),
          );
        } else {
          dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
        }
      },
      onSuccess: () => {
        dispatch(
          toggleSnackbarOpen({
            snackbarMessage: successMessage,
            messageType: SUCCESS,
          }),
        );
      },
    },
  );
};
