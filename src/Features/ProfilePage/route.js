import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import Profile from './Profile';

export const profileRoute = {
  path: RouteNames.profile,
  permissions: isPublicRoute, // to intimate it is public route
  component: Profile,
};
