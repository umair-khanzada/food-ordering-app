import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import { baseUrl, ERROR } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';

export const FetchBalances = () => {
  const vendorId = useSelector((state) => state.authReducer.id);
  return useQuery('balance', async () => {
    const { data } = await axios.get(baseUrl + `balance/vendor/${vendorId}`);
    const structutredData = [];

    data.forEach((data) => {
      if (data.userId !== null) {
        structutredData.push({
          user: data.userId.name,
          amount: data.amount,
          id: data.id,
        });
      }
    });

    return structutredData;
  });
};

export const FetchBalanceById = (id) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return useQuery(
    'balance/' + id,
    async () => {
      const { data } = await axios.get(baseUrl + `balance/${id}`);
      return data;
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
    },
  );
};
