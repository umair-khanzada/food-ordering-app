import RouteNames from '../../routes/RouteNames';
import { isPublicRoute } from '../../routes/Permission';

export const loginRoute = {
    path: RouteNames.login,
    permissions: isPublicRoute, // to intimate it is public route
} 