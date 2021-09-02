import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import foregetPasswordContainer from './ForgetPasswordContainer';

export const foregetPasswordRoute = {
  path: RouteNames.foregetPassword,
  permissions: isPublicRoute, // to intimate it is public route
  component: foregetPasswordContainer,
};
