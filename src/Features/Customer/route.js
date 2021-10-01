import { isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import Dashboard from './Dashboard';
import CustomerOrderHistory from './OrderHistory/OrderHistory';
import Profile from './UserProfile/Profile';

export const dashboardRoute = {
  path: RouteNames.dashboard,
  permissions: isProtectedRoute,
  component: Dashboard,
};

export const profileRoute = {
  path: RouteNames.profile,
  permissions: isProtectedRoute,
  component: Profile,
};

export const customerOrderHistoryRoute = {
  path: RouteNames.orderHistories,
  permissions: isProtectedRoute,
  component: CustomerOrderHistory,
};
