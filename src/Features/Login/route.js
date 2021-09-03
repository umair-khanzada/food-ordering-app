import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import LoginContainer from './LoginContainer';

export const loginRoute = {
  path: RouteNames.login,
  permissions: isPublicRoute,
  component: LoginContainer,
};
