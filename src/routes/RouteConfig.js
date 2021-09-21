import { addCategoriesRoute, categoriesRoute, editCategoriesRoute } from '../Features/Admin/Categories/route';
import { orderHistorydRoute, addOrderdRoute, editOrderdRoute } from '../Features/Admin/OrderHistory/route';
import { addUserRoute, editUserRoute, usersRoute } from '../Features/Admin/Users/route';
import { addVendorsRoute, editVendorsRoute, vendorsRoute } from '../Features/Admin/Vendors/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Customer/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { OrderListRoute } from '../Features/Vendor/route';
import { RestaurantRoute } from '../Features/Vendor/route';
import { MenuListRoute } from '../Features/Vendor/route';

const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],

  orderPlacer: [dashboardRoute, MenuListRoute, OrderListRoute],

  admin: [
    orderHistorydRoute,

    addOrderdRoute,

    editOrderdRoute,

    usersRoute,

    editUserRoute,

    addUserRoute,

    vendorsRoute,

    editVendorsRoute,

    addVendorsRoute,

    categoriesRoute,

    addCategoriesRoute,

    editCategoriesRoute,
  ],

  officeBoy: [RestaurantRoute],

  common: [MenuListRoute],
};

export default routeConfig;
