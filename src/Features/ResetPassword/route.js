import { isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import ResetPasswordContainer from './ResetPasswordContainer';

export const resetPasswordRoute = {
  path: RouteNames.resetPassword,
  permissions: isProtectedRoute,
  component: ResetPasswordContainer,
};
