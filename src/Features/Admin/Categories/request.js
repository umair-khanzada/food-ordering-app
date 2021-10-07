import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import { GetHeader } from '../../../scripts/constants';
import { baseUrl } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';

const Categories = async (headers) => {
  const {
    data: { results },
  } = await axios.get(baseUrl + 'categories', {
    headers,
  });

  return results;
};

export const FetchCategories = () => {
  const { headers } = GetHeader();

  const dispatch = useDispatch();
  const history = useHistory();

  return useQuery('categories', () => Categories(headers), {
    onError: (err) => {
      if (err.response.status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen('Session Expired! Please Log in again.'));
      }
    },
  });
};
const CategoriesById = async (headers, id) => {
  const { data } = await axios.get(baseUrl + 'categories/' + id, {
    headers,
  });

  return data;
};
export const FetchCategoriesById = (id) => {
  const { headers } = GetHeader();

  return useQuery('categoriesBYId', () => CategoriesById(headers, id));
};
