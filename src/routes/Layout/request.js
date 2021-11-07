import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../components/AlertMessage/alertRedux/actions';
import { logout } from '../../Features/Auth/actions';
import { baseUrl, ERROR, GetHeader } from '../../scripts/constants';

const userById = async (headers, id, isLoggedIn) => {
  if (isLoggedIn) {
    const { data } = await axios.get(baseUrl + `users/${id}`, {
      headers,
    });
    return data;
  }
};
export const FetchUserById = (id, isLoggedIn) => {
  const { headers } = GetHeader();
  const history = useHistory();
  const dispatch = useDispatch();
  return useQuery(['usersById', id], () => userById(headers, id, isLoggedIn), {
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      if (error.response.status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
  });
};
