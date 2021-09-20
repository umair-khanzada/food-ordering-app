import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import Categories from './index';

export const categoriesRoute = {
  path: RouteNames.categories,
  permissions: isProtectedRoute,
  component: Categories,
};

export const addCategoriesRoute = {
  path: RouteNames.addCategory,
  permissions: isProtectedRoute,
  component: AddCategory,
};

export const editCategoriesRoute = {
  path: RouteNames.editCategory,
  permissions: isProtectedRoute,
  component: EditCategory,
};
