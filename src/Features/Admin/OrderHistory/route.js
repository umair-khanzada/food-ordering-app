import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddOrder from './AddOrder';
import EditOrder from './EditOrder';
import OrderHistory from './index';

export const orderHistorydRoute = {
  path: RouteNames.orderHistory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: OrderHistory,
};

export const addOrderdRoute = {
  path: RouteNames.addOrderHistory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: AddOrder,
};

export const editOrderdRoute = {
  path: RouteNames.editOrderHistory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: EditOrder,
};
