import Roles from '../roles';

export const isOfficeBoy = (role) => role === Roles.isOfficeBoy;
export const isOrderPlacer = (role) => role === Roles.orderPlacer;

export const isOfficeBoyOnlyRoute = [Roles.isOfficeBoy];
export const isOrderPlacerOnlyRoute = [Roles.isOrderPlacer];
export const isPublicRoute = 'IS_PUBLIC_ROUTE';
export const isProtectedRoute = 'IS_PROTECTED_ROUTE';
