import { isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import HomeContainer from './HomeContainer';

export const homeRoute = {
  path: RouteNames.home,
  permissions: isProtectedRoute,
  component: HomeContainer,
};
