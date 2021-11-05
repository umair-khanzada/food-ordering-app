import axios from 'axios';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../components/AlertMessage/alertRedux/actions';
import { baseUrl, ERROR, GetHeader } from '../../scripts/constants';
import { logout } from '../Auth/actions';

const Vendors = async (headers, userType) => {
  const { data } = await axios.get(baseUrl + 'users', {
    headers,
  });

  return data.filter((user) => user.role == userType);
};

export const FetchVendors = (userType) => {
  const { headers } = GetHeader();
  const dispatch = useDispatch();
  const history = useHistory();
  return useQuery('vendors', () => Vendors(headers, userType), {
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

const categories = async (headers) => {
  const { data } = await axios.get(baseUrl + 'categories ', {
    headers,
  });

  return data;
};

export const GetCategories = () => {
  const { headers } = GetHeader();
  const dispatch = useDispatch();
  const history = useHistory();
  return useQuery('categories', () => categories(headers), {
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

export const itemsByVendor = async (headers, vendorId) => {
  if (vendorId !== '') {
    const { data } = await axios.get(baseUrl + 'items ', {
      headers,
    });
    return data.filter(({ createdBy }) => createdBy === vendorId);
  }
};

const orderHistory = async (headers, user_Id) => {
  const { data: orders } = await axios.get(baseUrl + `orders/user/${user_Id}`, {
    headers,
  });

  const structuredData = [];
  orders.forEach(({ items, vendorId, status, amount, id }) => {
    if (vendorId) {
      const itemsArray = [];
      items.forEach((item) => {
        const parseItem = JSON.parse(item);
        itemsArray.push(parseItem);
      });

      structuredData.push({
        id,
        name: vendorId.name,
        items: itemsArray,
        status,
        price: amount,
      });
    }
  });

  return structuredData;
};
export const FetchOrderHistory = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });

  const { headers } = GetHeader();
  return useQuery('orders', () => orderHistory(headers, userId), {
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
