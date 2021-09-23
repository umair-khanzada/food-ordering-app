import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import CategoryList from './CategoryList/CategoryList';
import Menu from './Menu';
import OrderList from './OrderList/OrderList';

export const OrderListRoute = {
  path: RouteNames.orderList,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrderList,
};

export const MenuListRoute = {
  path: RouteNames.menuList,
  permissions: isPublicRoute,
  component: Menu,
};

export const CategoryListRoute = {
  path: RouteNames.categoryList,
  permissions: isPublicRoute,
  component: CategoryList,
};
