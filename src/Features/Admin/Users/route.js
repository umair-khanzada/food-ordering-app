import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddUser from './Add User';
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
