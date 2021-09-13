import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { profileRoute } from '../Features/Customer/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],
  orderPlacer: [dashboardRoute],
  officeBoy: [],
  common: [profileRoute, resetPasswordRoute],
};

export default routeConfig;
