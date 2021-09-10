import { categoryListsRoute, ordersHistoryRourte, usersListsRoute, vendorsRoute } from '../Features/Admin/route';
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
    vendorsRoute,
    usersListsRoute,
    categoryListsRoute,
    ordersHistoryRourte,
  ],

  orderPlacer: [dashboardRoute],
  officeBoy: [],
  common: [profileRoute],
};

export default routeConfig;
