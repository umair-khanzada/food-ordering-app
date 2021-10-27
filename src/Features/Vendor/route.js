import { isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import BalanceSheet from './BalanceSheet';
import EditBalanceSheet from './BalanceSheet/EditBalance';
import CategoryList from './CategoryList/CategoryList';
import Menu from './Menu';
import AddMenu from './Menu/Add Menu';
import EditMenu from './Menu/Edit Menu';
import OrderList from './OrderList/OrderList';
import VendorProfile from './vendorProfile';

export const MenuListRoute = {
  path: RouteNames.menuList,
  permissions: isProtectedRoute,
  component: Menu,
};

export const OrderListRoute = {
  path: RouteNames.orderList,
  permissions: isProtectedRoute, // to intimate it is public route
  component: OrderList,
};

export const CategoryListRoute = {
  path: RouteNames.categoryList,
  permissions: isProtectedRoute,
  component: CategoryList,
};

export const AddMenuRoute = {
  path: RouteNames.addmenu,
  permissions: isProtectedRoute,
  component: AddMenu,
};
export const EditMenuRoute = {
  path: RouteNames.editmenu,
  permissions: isProtectedRoute,
  component: EditMenu,
};

export const BalanceSheetRoute = {
  path: RouteNames.balanceSheet,
  permissions: isProtectedRoute,
  component: BalanceSheet,
};

export const EditBalanceSheetRoute = {
  path: RouteNames.editBalanceSheet,
  permissions: isProtectedRoute,
  component: EditBalanceSheet,
};
export const vendorProfileRoute = {
  path: RouteNames.vendorProfile,
  permissions: isProtectedRoute,
  component: VendorProfile,
};
