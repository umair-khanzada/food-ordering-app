import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Users from './index';

export const usersRoute = {
  path: RouteNames.users,
  permissions: isProtectedRoute,
  component: Users,
};

export const addUserRoute = {
  path: RouteNames.addUser,
  permissions: isProtectedRoute,
  component: AddUser,
};

export const editUserRoute = {
  path: RouteNames.editUser,
  permissions: isProtectedRoute,
  component: EditUser,
};
