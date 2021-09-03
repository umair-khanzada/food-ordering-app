import { forgetPasswordRoute, loginRoute, signUpRoute, resetPasswordRoute } from '../Features/Auth/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, forgetPasswordRoute, resetPasswordRoute, profileRoute],
  orderPlacer: [],
  officeBoy: [],
  common: [],
};

export default routeConfig;
