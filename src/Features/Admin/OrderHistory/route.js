import { isPublicRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddOrder from './AddOrder';
import EditOrder from './EditOrder';
import OrderHistory from './index';

export const orderHistorydRoute = {
  path: RouteNames.orderHistory,
  permissions: isPublicRoute,
  component: OrderHistory,
};

export const addOrderdRoute = {
  path: RouteNames.addOrderHistory,
  permissions: isPublicRoute,
  component: AddOrder,
};

export const editOrderdRoute = {
  path: RouteNames.editOrderHistory,
  permissions: isPublicRoute,
  component: EditOrder,
};
