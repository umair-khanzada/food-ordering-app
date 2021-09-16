import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import CategoryList from './CategoryList/CategoryList';

export const CategoryListRoute = {
  path: RouteNames.vendorcategorylist,
  permissions: isPublicRoute, // to intimate it is public route
  component: CategoryList,
};
