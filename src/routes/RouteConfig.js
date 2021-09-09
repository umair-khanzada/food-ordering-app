import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { orderhistoryRoute } from '../Features/OrderHistory/route';
import { profileRoute } from '../Features/ProfilePage/route';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, forgetPasswordRoute, resetPasswordRoute, profileRoute, dashboardRoute],
  orderPlacer: [orderhistoryRoute],
  officeBoy: [],
  common: [profileRoute, resetPasswordRoute],
};

export default routeConfig;
