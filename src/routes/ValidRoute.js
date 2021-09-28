import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';

import Unauthorized from '../Features/Unauthorized';
import { isProtectedRoute, isPublicRoute } from './Permission';

const ValidRoute = ({ route, authorizedRole }) => {
  const { isLoggedIn, role } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, role },
    } = state;
    return {
      role,
      isLoggedIn,
    };
  }, shallowEqual);

  const { component: Component, permissions } = route;

  if (!authorizedRole && Boolean(!isLoggedIn) && permissions === isPublicRoute) return <Component />;
  if (!authorizedRole && Boolean(isLoggedIn) && permissions === isProtectedRoute) return <Component />;
  if (Boolean(isLoggedIn) && role === authorizedRole) return <Component />;
  return <Unauthorized />;
};

export default ValidRoute;
