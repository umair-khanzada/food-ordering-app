import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import forgetPasswordContainer from './ForgetPasswordContainer';

export const forgetPasswordRoute = {
  path: RouteNames.forgetPassword,
  permissions: isPublicRoute, // to intimate it is public route
  component: forgetPasswordContainer,
};
