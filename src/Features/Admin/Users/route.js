import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddUser from './AddUser';
import EditUser from './EditUser';
import Users from './index';

export const usersRoute = {
  path: RouteNames.users,
  permissions: isProtectedRoute, // to intimate it is public route
  component: Users,
};

export const addUserRoute = {
  path: RouteNames.addUser,
  permissions: isProtectedRoute, // to intimate it is public route
  component: AddUser,
};

export const editUserRoute = {
  path: RouteNames.editUser,
  permissions: isProtectedRoute, // to intimate it is public route
  component: EditUser,
};
