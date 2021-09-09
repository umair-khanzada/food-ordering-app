import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddVendor from './Edit Vendor';

export const editVendorRoute = {
  path: RouteNames.addVendor,
  permissions: isProtectedRoute, // to intimate it is public route
  component: AddVendor,
};
