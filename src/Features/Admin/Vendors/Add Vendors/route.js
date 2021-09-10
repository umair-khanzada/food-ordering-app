import AddVendors from '.';
import RouteNames from '../../../../routes/RouteNames';
import { isPublicRoute } from '../../../routes/Permission';

export const addVendorsRoute = {
  path: RouteNames.addVendors,
  permissions: isPublicRoute, // to intimate it is public route
  component: AddVendors,
};
