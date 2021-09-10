import { isProtectedRoute, isPublicRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import EditVendor from './Edit Vendor';
import VendorList from './index';

export const vendorsRoute = {
  path: RouteNames.vendors,
  permissions: isPublicRoute, // to intimate it is public route
  component: VendorList,
};

export const editVendorRoute = {
  path: RouteNames.editVendor,
  permissions: isProtectedRoute, // to intimate it is public route
  component: EditVendor,
};
