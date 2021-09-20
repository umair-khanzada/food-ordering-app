import { isProtectedRoute } from '../../../routes/Permission';
import RouteNames from '../../../routes/RouteNames';
import AddVendor from './AddVendor';
import EditVendor from './EditVendor';
import Vendors from './index';

export const vendorsRoute = {
  path: RouteNames.vendors,

  permissions: isProtectedRoute,

  component: Vendors,
};

export const editVendorsRoute = {
  path: RouteNames.editVendor,

  permissions: isProtectedRoute,

  component: EditVendor,
};

export const addVendorsRoute = {
  path: RouteNames.addVendor,

  permissions: isProtectedRoute,

  component: AddVendor,
};
