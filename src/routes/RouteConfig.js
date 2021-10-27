import { addCategoriesRoute, categoriesRoute, editCategoriesRoute } from '../Features/Admin/Categories/route';
import { addUserRoute, editUserRoute, usersRoute } from '../Features/Admin/Users/route';
import { addVendorsRoute, editVendorsRoute, vendorsRoute } from '../Features/Admin/Vendors/route';
import { loginRoute, signUpRoute } from '../Features/Auth/route';
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
  vendorProfileRoute,
} from '../Features/Vendor/route';

const routeConfig = {
  auth: [loginRoute, signUpRoute],

  orderPlacer: [dashboardRoute, MenuListRoute],

  admin: [
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
    AddMenuRoute,
    EditMenuRoute,
    BalanceSheetRoute,
    EditBalanceSheetRoute,

    vendorProfileRoute,
  ],
  officeBoy: [],

  common: [],
};

export default routeConfig;
