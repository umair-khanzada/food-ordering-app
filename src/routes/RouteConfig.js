import { orderHistorydRoute, addOrderdRoute } from '../Features/Admin/OrderHistory/route';
import { categoryListsRoute, usersListsRoute, vendorsRoute } from '../Features/Admin/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],

  orderPlacer: [dashboardRoute],
  admin: [orderHistorydRoute, addOrderdRoute, vendorsRoute, usersListsRoute, categoryListsRoute],
  officeBoy: [],
  common: [profileRoute],
};

export default routeConfig;
