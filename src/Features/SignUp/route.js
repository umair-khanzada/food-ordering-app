import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import SignUpContainer from './SignUpContainer';

export const signUpRoute = {
  path: RouteNames.signup,
  permissions: isPublicRoute, // to intimate it is public route
  component: SignUpContainer,
};
