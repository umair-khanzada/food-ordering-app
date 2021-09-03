import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import LoginContainer from './Login/LoginContainer';
import SignUpContainer from './SignUp/SignUpContainer';

export const loginRoute = {
  path: RouteNames.login,
  permissions: isPublicRoute, // to intimate it is public route
  component: LoginContainer,
};
export const signUpRoute = {
  path: RouteNames.signup,
  permissions: isPublicRoute, // to intimate it is public route
  component: SignUpContainer,
};
