import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { orderHistoryRoute, profileRoute } from '../Features/Customer/route';
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
    EditMenuRoute,
    RestrauntRoute,
  ],
  orderPlacer: [],
  officeBoy: [],
  common: [],
};

export default routeConfig;
