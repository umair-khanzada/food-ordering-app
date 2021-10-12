import { useSelector } from 'react-redux';

import RouteNames from '../routes/RouteNames';
export const emailRegex = new RegExp('\\S+@\\S+\\.\\S+');
export const passwordRegex = new RegExp('^(.*(([A-Za-z]+(.*)[0-9]+)|([0-9]+(.*)[A-Za-z]+))(.*))$');
export const contactRegex = new RegExp('^[0-9]{11,12}$');
export const baseUrl = 'http://localhost:4000/v1/';
export const SUCCESS = 'success';
export const ERROR = 'error';
export const imgURLRegex = new RegExp('(https?://.*([.])(?:png|jpg|webp|gif|jpeg))');
export const RestraurantRegex = new RegExp('(([A-Za-z ]+s*[0-9]*)|([0-9]*s*[A-Za-z ]+))+');

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
  admin: RouteNames.vendors,
  vendor: RouteNames.menuList,
  user: RouteNames.dashboard,
};
export const API_ROUTE = 'http://localhost:4000/v1';
