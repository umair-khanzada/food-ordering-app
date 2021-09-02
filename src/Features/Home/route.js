import { isPrivateRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import HomeContainer from './HomeContainer';

export const homeRoute = {
  path: RouteNames.home,
  permissions: isPrivateRoute, // to intimate it is public route
  component: HomeContainer,
};
