import { addCategoriesRoute, categoriesRoute, editCategoriesRoute } from '../Features/Admin/Categories/route';
import { addOrderdRoute, editOrderdRoute } from '../Features/Admin/OrderHistory/route';
import { addUserRoute, editUserRoute, usersRoute } from '../Features/Admin/Users/route';
import { addVendorsRoute, editVendorsRoute, vendorsRoute } from '../Features/Admin/Vendors/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import {
  customerOrderHistoryRoute,
  dashboardRoute,
  profileRoute,
  UserBalanceSheetRoute,
  showTabRoute,
} from '../Features/Customer/route';
import {
  AddMenuRoute,
  BalanceSheetRoute,
  CategoryListRoute,
  EditBalanceSheetRoute,
  EditMenuRoute,
  MenuListRoute,
  OrderListRoute,
  RestaurantRoute,
  RestaurantListRoute,
  editRestaurantsRoute,
  editOrderdListRoute,
} from '../Features/Vendor/route';

const routeConfig = {
  auth: [loginRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],

  orderPlacer: [dashboardRoute, MenuListRoute],

  admin: [
    // orderHistorydRoute,

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

  customer: [dashboardRoute, profileRoute, customerOrderHistoryRoute, UserBalanceSheetRoute, showTabRoute],
  vendor: [
    OrderListRoute,
    MenuListRoute,
    CategoryListRoute,
    RestaurantRoute,
    AddMenuRoute,
    EditMenuRoute,
    BalanceSheetRoute,
    EditBalanceSheetRoute,
    RestaurantListRoute,
    editRestaurantsRoute,
    editOrderdListRoute,
  ],
  officeBoy: [],

  common: [],
};

export default routeConfig;
