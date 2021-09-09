import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import OrderHistory from './OrderHistory';

export const orderhistoryRoute = {
  path: RouteNames.orderhistory,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrderHistory,
};
