import { isPublicRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import UsersList from '../Users';
import VendorList from './index';

export const vendorsRoute = {
  path: RouteNames.vendors,
  permissions: isPublicRoute, // to intimate it is public route
  component: VendorList,
};
export const usersListsRoute = {
  path: RouteNames.usersList,
  permissions: isPublicRoute, // to intimate it is public route
  component: UsersList,
};
