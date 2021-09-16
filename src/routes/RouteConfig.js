import { orderHistorydRoute, addOrderdRoute } from '../Features/Admin/OrderHistory/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { profileRoute } from '../Features/Customer/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],

  orderPlacer: [dashboardRoute],
  admin: [orderHistorydRoute, addOrderdRoute],
  officeBoy: [],
  common: [profileRoute],
};

export default routeConfig;
