import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import { ERROR, GetHeader } from '../../../scripts/constants';
import { baseUrl } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';

const Categories = async (headers) => {
  const { data } = await axios.get(baseUrl + 'categories', {
    headers,
  });

  return data;
};

export const FetchCategories = () => {
  const { headers } = GetHeader();

  const dispatch = useDispatch();
  const history = useHistory();

  return useQuery('categories', () => Categories(headers), {
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
const CategoriesById = async (headers, id) => {
  const { data } = await axios.get(baseUrl + `categories/${id}`, {
    headers,
  });

  return data;
};
export const FetchCategoriesById = (id) => {
  const { headers } = GetHeader();

  return useQuery('categoriesBYId', () => CategoriesById(headers, id));
};
