import EditUser from '.';
import { isPublicRoute } from '../../../../../routes/Permission';
import RouteNames from '../../../../../routes/RouteNames';

export const editUserRoute = {
  path: RouteNames.editUser,
  permissions: isPublicRoute, // to intimate it is public route
  component: EditUser,
};
