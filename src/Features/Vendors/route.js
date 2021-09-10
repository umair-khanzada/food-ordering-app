import { isPublicRoute } from '../../routes/Permission';
import RouteNames from '../../routes/RouteNames';
import Menu from './Menu';
import AddMenuContainer from './Menu/AddMenu/AddMenuContainer';
export const MenuRoute = {
  path: RouteNames.menu,
  permissions: isPublicRoute, // to intimate it is public route
  component: Menu,
};

export const AddMenuRoute = {
  path: RouteNames.addMenu,
  permissions: isPublicRoute, // to intimate it is public route
  component: AddMenuContainer,
};

// export const RestrauntRoute = {
//   path: RouteNames.restraunt,
//   permissions: isPublicRoute, // to intimate it is public route
//   component: Menu,
// };
