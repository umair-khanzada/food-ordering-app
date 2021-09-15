import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { orderHistoryRoute } from '../Features/customer/route';
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
    orderHistoryRoute,
  ],
  orderPlacer: [dashboardRoute],
  officeBoy: [],
  common: [profileRoute, resetPasswordRoute],
};

export default routeConfig;
