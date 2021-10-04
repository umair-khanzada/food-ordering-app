import { addCategoriesRoute, categoriesRoute, editCategoriesRoute } from '../Features/Admin/Categories/route';
import { orderHistorydRoute, addOrderdRoute, editOrderdRoute } from '../Features/Admin/OrderHistory/route';
import { addUserRoute, editUserRoute, usersRoute } from '../Features/Admin/Users/route';
import { addVendorsRoute, editVendorsRoute, vendorsRoute } from '../Features/Admin/Vendors/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { customerOrderHistoryRoute, dashboardRoute, profileRoute } from '../Features/Customer/route';
import {
  AddMenuRoute,
  CategoryListRoute,
  EditMenuRoute,
  MenuListRoute,
  OrderListRoute,
  RestaurantRoute,
  RestaurantListRoute,
  editRestaurantsRoute,
} from '../Features/Vendor/route';

const routeConfig = {
  auth: [loginRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],

  orderPlacer: [dashboardRoute, MenuListRoute],

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

  customer: [dashboardRoute, profileRoute, customerOrderHistoryRoute],
  vendor: [
    OrderListRoute,
    MenuListRoute,
    CategoryListRoute,
    RestaurantRoute,
    AddMenuRoute,
    EditMenuRoute,
    RestaurantListRoute,
    editRestaurantsRoute,
  ],
  officeBoy: [],

  common: [],
};

export default routeConfig;
