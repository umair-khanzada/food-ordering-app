import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import OrderHistory from './index';

export const orderHistoryRoute = {
  path: RouteNames.orderHistory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: OrderHistory,
};
