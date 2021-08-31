import RouteNames from '../../routes/RouteNames';
import { isPublicRoute } from '../../routes/Permission';
import LoginContainer from './LoginContainer';

export const loginRoute = {
    path: RouteNames.login,
    permissions: isPublicRoute, // to intimate it is public route
    component: LoginContainer,
}; 