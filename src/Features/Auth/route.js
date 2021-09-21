import { isPublicRoute, isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import ForgetPasswordContainer from './ForgetPassword/ForgetPasswordContainer';
import LoginContainer from './Login/LoginContainer';
import ResetPasswordContainer from './ResetPassword/ResetPasswordContainer';
import SignUpContainer from './SignUp/SignUpContainer';

export const loginRoute = {
  path: RouteNames.login,
  permissions: isPublicRoute,
  component: LoginContainer,
};
export const signUpRoute = {
  path: RouteNames.signup,
  permissions: isPublicRoute,
  component: SignUpContainer,
};

export const forgetPasswordRoute = {
  path: RouteNames.forgetPassword,
  permissions: isPublicRoute,
  component: ForgetPasswordContainer,
};

export const resetPasswordRoute = {
  path: RouteNames.resetPassword,
  permissions: isProtectedRoute,
  component: ResetPasswordContainer,
};
