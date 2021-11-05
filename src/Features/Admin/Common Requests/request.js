import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import { baseUrl, ERROR, GetHeader } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';

const userList = async (headers, userType) => {
  const { data } = await axios.get(baseUrl + 'users', {
    headers,
  });
  return data.filter((user) => user.role == userType);
};
export const FetchUsers = (userType) => {
  const { headers } = GetHeader();

  const dispatch = useDispatch();
  const history = useHistory();

  return useQuery('users', () => userList(headers, userType), {
    onError: (error) => {
      const {
        response: {
          data: { message },
          status,
        },
      } = error;

      if (status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
  });
};

const userById = async (headers, id) => {
  const { data } = await axios.get(baseUrl + `users/${id}`, {
    headers,
  });

  return data;
};
export const FetchUserById = (id) => {
  const history = useHistory();
  const { headers } = GetHeader();
  const dispatch = useDispatch();
  return useQuery('usersById', () => userById(headers, id), {
    onError: (error) => {
      const {
        response: {
          data: { message },
          status,
        },
      } = error;

      if (status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
  });
};
