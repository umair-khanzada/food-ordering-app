import { orderHistorydRoute, addOrderdRoute } from '../Features/Admin/OrderHistory/route';
import { categoryListsRoute, usersListsRoute, vendorsRoute } from '../Features/Admin/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { profileRoute } from '../Features/Customer/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { OrderListRoute } from '../Features/Vendor/route';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],

  orderPlacer: [dashboardRoute],
  admin: [orderHistorydRoute, addOrderdRoute, vendorsRoute, usersListsRoute, categoryListsRoute],
  officeBoy: [OrderListRoute],
  common: [profileRoute],
};

export default routeConfig;
