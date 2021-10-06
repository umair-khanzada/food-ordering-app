import { useSelector } from 'react-redux';

import RouteNames from '../routes/RouteNames';
export const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const passwordRegex = new RegExp(
  '^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,}(?=.*[@$!%*#?&])*([A-Za-z0-9@$!%*#?&])*$',
);
export const contactRegex = new RegExp('^[0-9]{11,12}$');
export const baseUrl = 'http://localhost:4000/v1/';
export const SUCCESS = 'success';
export const ERROR = 'error';

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
  });
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
};
export const defaultRouteForRoles = {
  admin: RouteNames.orderHistory,
  vendor: RouteNames.menuList,
  user: RouteNames.dashboard,
};
export const API_ROUTE = 'http://localhost:4000/v1';
