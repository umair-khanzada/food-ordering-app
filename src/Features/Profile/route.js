import { isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import ProfileContainer from './ProfileContainer';

export const profileRoute = {
  path: RouteNames.profile,
  permissions: isProtectedRoute,
  component: ProfileContainer,
};
