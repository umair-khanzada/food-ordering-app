import { loginRoute, signUpRoute, resetPasswordRoute, forgetPasswordRoute } from '../Features/Auth/route';
import { dashboardRoute } from '../Features/Dashboard/route';
import { homeRoute } from '../Features/Home';
import { profileRoute } from '../Features/Profile';
// import { AddMenuRoute, MenuRoute } from '../Features/Vendors/route';
import { AddMenuRoute, MenuRoute } from '../Features/Vendors/route';

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
  ],
  orderPlacer: [],
  officeBoy: [],
  common: [profileRoute],
};

export default routeConfig;
