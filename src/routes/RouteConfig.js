import { categoriesRoute } from '../Features/Admin/Categories/route';
import { addHistoryRoute, orderHistoryRoute } from '../Features/Admin/OrderHistory/route';
import { addUserRoute, usersRoute } from '../Features/Admin/Users/route';
import { vendorsRoute, editVendorRoute } from '../Features/Admin/Vendors/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],
  orderPlacer: [dashboardRoute],
  admin: [orderHistoryRoute, addHistoryRoute, addUserRoute, categoriesRoute, usersRoute, vendorsRoute, editVendorRoute],
  officeBoy: [],
  common: [profileRoute],
};

export default routeConfig;
