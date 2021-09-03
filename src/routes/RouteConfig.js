import { loginRoute, signUpRoute } from '../Features/Auth/route';

const routeConfig = {
  auth: [loginRoute, signUpRoute],
  orderPlacer: [],
  officeBoy: [],
  common: [],
};

export default routeConfig;
