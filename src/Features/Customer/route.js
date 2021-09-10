import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import OrderHistory from './OrderHistory/OrderHistory';
import Profile from './UserProfile/Profile';

export const dashboardRoute = {
  path: RouteNames.login,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrderHistory,
};
export const orderHistoryRoute = {
  path: RouteNames.orderhistory,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrderHistory,
};

export const profileRoute = {
  path: RouteNames.profile,
  permissions: isPublicRoute, // to intimate it is public route
  component: Profile,
};
