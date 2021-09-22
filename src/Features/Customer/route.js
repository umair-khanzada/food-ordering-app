import { isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import Dashboard from './Dashboard';
import CustomerOrderHistory from './OrderHistory/OrderHistory';
import Profile from './UserProfile/Profile';

export const dashboardRoute = {
  path: RouteNames.dashboard,
  permissions: isProtectedRoute, // to intimate it is public route
  component: Dashboard,
};

export const profileRoute = {
  path: RouteNames.profile,
  permissions: isProtectedRoute, // to intimate it is public route
  component: Profile,
};

export const customerOrderHistoryRoute = {
  path: RouteNames.orderHistory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: CustomerOrderHistory,
};
