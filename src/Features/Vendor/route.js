import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import OrderList from './OrderList/OrderList';

export const OrderListRoute = {
  path: RouteNames.orderlist,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrderList,
};
