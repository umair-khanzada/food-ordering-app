import { isPrivateRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import ResetPasswordContainer from './ResetPasswordContainer';

export const resetPasswordRoute = {
  path: RouteNames.resetPassword,
  permissions: isPrivateRoute, // to intimate it is public route
  component: ResetPasswordContainer,
};
