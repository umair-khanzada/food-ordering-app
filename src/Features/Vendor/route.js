import { isProtectedRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import BalanceSheet from './BalanceSheet';
import EditBalanceSheet from './BalanceSheet/EditBalance';
import CategoryList from './CategoryList/CategoryList';
import Menu from './Menu';
import AddMenu from './Menu/Add Menu';
import EditMenu from './Menu/Edit Menu';
import EditOrderList from './OrderList/Edit Order';
import OrderList from './OrderList/OrderList';
import AddRestaurantContainer from './Restaurant/AddRestaurant/AddRestaurantContainer';
import EditRestaurant from './Restaurants/EditRestaurant';
import RestaurantList from './Restaurants/index';

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

export const RestaurantRoute = {
  path: RouteNames.restaurant,
  permissions: isProtectedRoute, // to intimate it is public route
  component: AddRestaurantContainer,
};

export const CategoryListRoute = {
  path: RouteNames.categoryList,
  permissions: isProtectedRoute,
  component: CategoryList,
};
export const RestaurantListRoute = {
  path: RouteNames.restaurantList,
  permissions: isProtectedRoute,
  component: RestaurantList,
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

export const editRestaurantsRoute = {
  path: RouteNames.editRestaurant,
  permissions: isProtectedRoute,
  component: EditRestaurant,
};
export const editOrderdListRoute = {
  path: RouteNames.editOrderList,
  permissions: isProtectedRoute,
  component: EditOrderList,
};
