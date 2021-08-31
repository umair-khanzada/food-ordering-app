import { isPublicRoute } from '../../routes/Permission';
import LoginContainer from './LoginContainer';
import RouteNames from '../../routes/RouteNames';

export const loginRoute = {
  path: RouteNames.login,
  permissions: isPublicRoute, // to intimate it is public route
  component: LoginContainer,
};
