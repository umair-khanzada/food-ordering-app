import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import { baseUrl, ERROR } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';

export const FetchBalances = () => {
  const userId = useSelector((state) => state.authReducer.id);
  const dispatch = useDispatch();
  const history = useHistory();
  return useQuery(
    'balance',
    async () => {
      const { data } = await axios.get(baseUrl + `balance/user/${userId}`);

      const filteredData = [];
      data.forEach((item) => {
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
