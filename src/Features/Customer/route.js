import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import Dashboard from './Dashboard';
import OrderHistory from './OrderHistory/OrderHistory';
import Profile from './UserProfile/Profile';

export const dashboardRoute = {
  path: RouteNames.dashboard,
  permissions: isPublicRoute, // to intimate it is public route
  component: Dashboard,
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
