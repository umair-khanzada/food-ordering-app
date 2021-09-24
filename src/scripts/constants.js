import RouteNames from '../routes/RouteNames';
export const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const contactRegex = new RegExp('([0-9]{1}|[0-9]{2}|[0-9]{3})[0-9]{10,12}');
export const defaultRouteForRoles = {
  admin: RouteNames.orderHistory,
  vendor: RouteNames.menuList,
  user: RouteNames.dashboard,
};
