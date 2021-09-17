import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import Menu from './Menu';
import OrderList from './OrderList/OrderList';

export const OrderListRoute = {
  path: RouteNames.orderlist,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrderList,
};

export const MenuListRoute = {
  path: RouteNames.menuList,
  permissions: isPublicRoute,
  component: Menu,
};
