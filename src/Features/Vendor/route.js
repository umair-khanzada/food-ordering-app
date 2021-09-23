import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import CategoryList from './CategoryList/CategoryList';
import Menu from './Menu';
import AddMenu from './Menu/Add Menu';
import EditMenu from './Menu/Edit Menu';
import OrderList from './OrderList/OrderList';
import AddRestaurantContainer from './Restaurant/AddRestaurant/AddRestaurantContainer';

export const MenuListRoute = {
  path: RouteNames.menuList,
  permissions: isPublicRoute,
  component: Menu,
};

export const OrderListRoute = {
  path: RouteNames.orderList,
  permissions: isPublicRoute, // to intimate it is public route
  component: OrderList,
};

export const RestaurantRoute = {
  path: RouteNames.restaurant,
  permissions: isPublicRoute, // to intimate it is public route
  component: AddRestaurantContainer,
};

export const CategoryListRoute = {
  path: RouteNames.categoryList,
  permissions: isPublicRoute,
  component: CategoryList,
};

export const AddMenuRoute = {
  path: RouteNames.addmenu,
  permissions: isPublicRoute,
  component: AddMenu,
};
export const EditMenuRoute = {
  path: RouteNames.editmenu,
  permissions: isPublicRoute,
  component: EditMenu,
};
