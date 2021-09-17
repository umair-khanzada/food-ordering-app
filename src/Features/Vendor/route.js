import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import OrderList from './OrderList/OrderList';
import AddRestaurantContainer from './Restaurant/AddRestaurant/AddRestaurantContainer';

export const OrderListRoute = {
  path: RouteNames.orderlist,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrderList,
};

export const RestaurantRoute = {
  path: RouteNames.restaurant,
  permissions: isPublicRoute, // to intimate it is public route
  component: AddRestaurantContainer,
};
