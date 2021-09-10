import EditHistory from '.';
import { isPublicRoute } from '../../../../routes/Permission';
import RouteNames from '../../../../routes/RouteNames';

export const editHistoryRoute = {
  path: RouteNames.editHistory,
  permissions: isPublicRoute, // to intimate it is public route
  component: EditHistory,
};
