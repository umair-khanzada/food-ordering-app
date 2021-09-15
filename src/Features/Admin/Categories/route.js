import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import Categories from './index';

export const categoriesRoute = {
  path: RouteNames.categories,
  permissions: isProtectedRoute, // to intimate it is public route
  component: Categories,
};

export const addCategoriesRoute = {
  path: RouteNames.addCategory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: AddCategory,
};

export const editCategoriesRoute = {
  path: RouteNames.editCategory,
  permissions: isProtectedRoute, // to intimate it is public route
  component: EditCategory,
};
