import { shallowEqual, useSelector } from 'react-redux';

import RouteNames from '../routes/RouteNames';
export const emailRegex = new RegExp('\\S+@\\S+\\.\\S+');
export const passwordRegex = new RegExp('^(.*(([A-Za-z]+(.*)[0-9]+)|([0-9]+(.*)[A-Za-z]+))(.*))$');
export const contactRegex = new RegExp('^[0-9]{11,12}$');

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://10.4.41.72:4000/v1/'
    : 'https://nisum-food-ordering-backend.herokuapp.com/v1/';
export const SUCCESS = 'success';
export const ERROR = 'error';
export const imgURLRegex = new RegExp('(https?://.*([.])(?:png|jpg|webp|gif|jpeg))');
export const RestraurantRegex = new RegExp('(([A-Za-z ]+s*[0-9]*)|([0-9]*s*[A-Za-z ]+))+');
export const searchFilter = ['BalanceSheet'];

export const AuthToken = () => {
  return useSelector(({ authReducer: { accessToken } }) => {
    return accessToken;
  });
};

export const GetHeader = () => {
  const { token } = useSelector((state) => {
    const {
      authReducer: {
        accessToken: { token },
      },
    } = state;
    return {
      token,
    };
  }, shallowEqual);
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
};
export const defaultRouteForRoles = {
  admin: RouteNames.vendors,
  vendor: RouteNames.menuList,
  user: RouteNames.dashboard,
};
