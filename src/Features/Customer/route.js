import { isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import UserBalanceSheet from './BalanceSheet/index';
import Dashboard from './Dashboard';
import ShowTab from './Dashboard/ShowTab';
import CustomerOrderHistory from './OrderHistory';
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
export const UserBalanceSheetRoute = {
  path: RouteNames.userBalanceSheet,
  permissions: isProtectedRoute,
  component: UserBalanceSheet,
};

export const showTabRoute = {
  path: RouteNames.showTabScreen,
  permissions: isProtectedRoute,
  component: ShowTab,
};
