import { forgetPasswordRoute, loginRoute, signUpRoute, resetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, forgetPasswordRoute, resetPasswordRoute, profileRoute, dashboardRoute],
  orderPlacer: [],
  officeBoy: [],
  common: [],
};

export default routeConfig;
