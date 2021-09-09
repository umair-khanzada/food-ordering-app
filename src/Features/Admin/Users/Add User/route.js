import AddUser from '.';
import { isPublicRoute } from '../../../../routes/Permission';
import RouteNames from '../../../../routes/RouteNames';

export const addUserRoute = {
  path: RouteNames.addUser,
  permissions: isPublicRoute, // to intimate it is public route
  component: AddUser,
};
