import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import Dashboard from '../Dashboard';
import Profile from './UserProfile/Profile';

export const dashboardRoute = {
  path: RouteNames.dashboard,
  permissions: isPublicRoute, // to intimate it is public route
  component: Dashboard,
};

export const profileRoute = {
  path: RouteNames.profile,
  permissions: isPublicRoute, // to intimate it is public route
  component: Profile,
};
