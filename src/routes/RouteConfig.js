import { homeRoute } from '../Features/Home';
import { loginRoute } from '../Features/Login';

const routeConfig = {
  auth: [loginRoute, homeRoute],
  orderPlacer: [],
  officeBoy: [],
  common: [],
};

export default routeConfig;
