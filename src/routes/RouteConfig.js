import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { orderHistoryRoute, profileRoute } from '../Features/Customer/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import {
  AddMenuRoute,
  MenuRoute,
  OrderListRoute,
  CategoryListRoute,
  AddCategoryRoute,
} from '../Features/Vendors/route';
const routeConfig = {
  auth: [
    loginRoute,
    homeRoute,
    signUpRoute,
    resetPasswordRoute,
    resetPasswordRoute,
    forgetPasswordRoute,
    dashboardRoute,
    AddMenuRoute,
    MenuRoute,
    profileRoute,
    orderHistoryRoute,
    profileRoute,
    OrderListRoute,
    CategoryListRoute,
    AddCategoryRoute,
  ],
  orderPlacer: [],
  officeBoy: [],
  common: [],
};

export default routeConfig;
