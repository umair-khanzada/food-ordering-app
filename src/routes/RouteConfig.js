import { addCategoriesRoute, categoriesRoute, editCategoriesRoute } from '../Features/Admin/Categories/route';
import { orderHistorydRoute, editOrderdRoute, addOrderdRoute } from '../Features/Admin/OrderHistory/route';
import { addUserRoute, editUserRoute, usersRoute } from '../Features/Admin/Users/route';
import { addVendorsRoute, editVendorsRoute, vendorsRoute } from '../Features/Admin/Vendors/route';
import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { orderHistoryCustomerRoute, profileRoute } from '../Features/Customer/route';
import { dashboardRoute } from '../Features/Customer/route';
import { homeRoute } from '../Features/Home';
import {
  AddMenuRoute,
  MenuRoute,
  OrderListRoute,
  CategoryListRoute,
  AddCategoryRoute,
  EditMenuRoute,
  RestrauntRoute,
} from '../Features/Vendors/route';
const routeConfig = {
  auth: [loginRoute, homeRoute, signUpRoute, resetPasswordRoute, resetPasswordRoute, forgetPasswordRoute],
  orderPlacer: [dashboardRoute],
  admin: [
    orderHistorydRoute,
    categoriesRoute,
    usersRoute,
    vendorsRoute,
    editOrderdRoute,
    addOrderdRoute,
    addUserRoute,
    editUserRoute,
    editVendorsRoute,
    addVendorsRoute,
    addCategoriesRoute,
    editCategoriesRoute,
  ],
  customer: [dashboardRoute, profileRoute, orderHistoryCustomerRoute],
  vendor: [AddMenuRoute, MenuRoute, OrderListRoute, CategoryListRoute, AddCategoryRoute, EditMenuRoute, RestrauntRoute],

  officeBoy: [],
  common: [],
};

export default routeConfig;
