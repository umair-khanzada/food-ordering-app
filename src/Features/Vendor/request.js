import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../components/AlertMessage/alertRedux/actions';
import { ERROR, GetHeader, baseUrl } from '../../scripts/constants';
import { logout } from '../Auth/actions';

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
  const { data } = useQuery('categories', () => Categories(headers), {
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
  return data;
};

const Items = async (headers) => {
  const res = await axios.get(baseUrl + 'items', {
    headers,
  });

  return res;
};

export const FetchItems = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { headers } = GetHeader();

  return useQuery('items', () => Items(headers), {
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

const ItemsById = async (headers, id) => {
  const { data } = await axios.get(baseUrl + `items/${id}`, {
    headers,
  });

  return data;
};
export const FetchItemsById = (id) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { headers } = GetHeader();

  return useQuery('fetchItems', () => ItemsById(headers, id), {
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
const orderHistory = async (vendorId) => {
  const { data: orders } = await axios.get(baseUrl + `orders/vendor/${vendorId}`);
  const structuredData = [];
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const orderDate = dd + '/' + mm + '/' + yyyy;
  const todayOrders = orders.filter(({ date }) => date === orderDate);
  todayOrders.forEach(({ items, userId, status, amount, id }) => {
    const itemsArray = [];
    if (userId) {
      items.forEach((item) => {
        const parseItem = JSON.parse(item);

        itemsArray.push(parseItem);
      });

      structuredData.push({
        id,
        name: userId.name,
        user_id: userId.id,
        items: itemsArray,
        status,
        price: amount,
      });
    }
  });

  return structuredData;
};
export const FetchOrderHistory = () => {
  const vendorId = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });

  return useQuery('orders', () => orderHistory(vendorId), {
    keepPreviousData: true,
    refetchInterval: 5000,
    notifyOnChangeProps: ['data'],
  });
};

const orderById = async (id, isUpdateOrder) => {
  if (isUpdateOrder) {
    const { data } = await axios.get(baseUrl + `orders/${id}`);
    return data;
  }
};

export const FetchOrderById = (id) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return useQuery(['ordersById', id], () => orderById(id), {
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
