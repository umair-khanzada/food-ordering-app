import { forgetPasswordRoute } from '../Features/ForgetPassword';
import { homeRoute } from '../Features/Home';
import { loginRoute } from '../Features/Login';
import { profileRoute } from '../Features/Profile';
import { resetPasswordRoute } from '../Features/ResetPassword';
import { signUpRoute } from '../Features/SignUp';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, forgetPasswordRoute, resetPasswordRoute, profileRoute],
  orderPlacer: [],
  officeBoy: [],
  common: [],
};

export default routeConfig;
