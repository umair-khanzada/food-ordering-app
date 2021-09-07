import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import Dashboard from './index';

export const dashboardRoute = {
  path: RouteNames.dashboard,
  permissions: isPublicRoute, // to intimate it is public route
  component: Dashboard,
};
