import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';
import { CategoryListRoute } from '../Features/Vendor/route';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],
  orderPlacer: [dashboardRoute, CategoryListRoute],
  officeBoy: [],
  common: [profileRoute, resetPasswordRoute],
};

export default routeConfig;
