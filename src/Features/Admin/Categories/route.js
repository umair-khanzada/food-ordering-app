import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import Categories from './index';

export const categoriesRoute = {
  path: RouteNames.categories,
  permissions: isProtectedRoute, // to intimate it is public route
  component: Categories,
};
