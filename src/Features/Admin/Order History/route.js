import { isPublicRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddHistory from './Add History';

export const addHistoryRoute = {
  path: RouteNames.addHistory,
  permissions: isPublicRoute, // to intimate it is public route
  component: AddHistory,
};
