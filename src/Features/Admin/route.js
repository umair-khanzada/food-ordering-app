import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import CategoryList from './Categories';
import OrdersHistory from './OrderHistory';
import UsersList from './Users';
import VendorList from './VendorList/index';

export const vendorsRoute = {
  path: RouteNames.vendors,
  permissions: isPublicRoute, // to intimate it is public route
  component: VendorList,
};
export const usersListsRoute = {
  path: RouteNames.usersList,
  permissions: isPublicRoute, // to intimate it is public route
  component: UsersList,
};
export const categoryListsRoute = {
  path: RouteNames.categoryList,
  permissions: isPublicRoute, // to intimate it is public route
  component: CategoryList,
};
export const ordersHistoryRourte = {
  path: RouteNames.ordersHistory,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrdersHistory,
};
