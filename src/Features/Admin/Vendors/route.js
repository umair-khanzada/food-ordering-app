import Vendors from '.';
import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddVendor from './AddVendor';
import EditVendor from './EditVendor';

export const vendorsRoute = {
  path: RouteNames.vendors,
  permissions: isProtectedRoute, // to intimate it is public route
  component: Vendors,
};

export const editVendorsRoute = {
  path: RouteNames.editVendor,
  permissions: isProtectedRoute, // to intimate it is public route
  component: EditVendor,
};

export const addVendorsRoute = {
  path: RouteNames.addVendor,
  permissions: isProtectedRoute, // to intimate it is public route
  component: AddVendor,
};
