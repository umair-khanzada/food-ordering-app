import { isPrivateRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import ProfileContainer from './ProfileContainer';

export const profileRoute = {
  path: RouteNames.profile,
  permissions: isPrivateRoute, // to intimate it is public route
  component: ProfileContainer,
};
