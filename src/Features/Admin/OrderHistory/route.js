import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddHistory from './Add History';
import OrderHistory from './index';

export const orderHistoryRoute = {
  path: RouteNames.orderHistory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: OrderHistory,
};

export const addHistoryRoute = {
  path: RouteNames.addHistory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: AddHistory,
};
