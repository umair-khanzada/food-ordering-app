import { addCategoriesRoute, categoriesRoute, editCategoriesRoute } from '../Features/Admin/Categories/route';
import { addHistoryRoute, editHistoryRoute, orderHistoryRoute } from '../Features/Admin/OrderHistory/route';
import { addUserRoute, editUserRoute, usersRoute } from '../Features/Admin/Users/route';
import { addVendorsRoute, editVendorsRoute, vendorsRoute } from '../Features/Admin/Vendors/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],
  orderPlacer: [dashboardRoute],
  admin: [
    orderHistoryRoute,
    categoriesRoute,
    usersRoute,
    vendorsRoute,
    editHistoryRoute,
    addHistoryRoute,
    addUserRoute,
    editUserRoute,
    editVendorsRoute,
    addVendorsRoute,
    addCategoriesRoute,
    editCategoriesRoute,
  ],
  officeBoy: [],
  common: [profileRoute],
};

export default routeConfig;
