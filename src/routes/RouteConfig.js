import { orderHistorydRoute } from '../Features/Admin/OrderHistory/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';

const routeConfig = {
  auth: [
    loginRoute,
    homeRoute,
    signUpRoute,
    resetPasswordRoute,
    resetPasswordRoute,
    forgetPasswordRoute,
    resetPasswordRoute,
  ],
  orderPlacer: [dashboardRoute],
  admin: [orderHistorydRoute],
  officeBoy: [],
  common: [profileRoute],
};

export default routeConfig;
