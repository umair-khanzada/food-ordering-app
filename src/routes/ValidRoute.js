import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';

import Unauthorized from '../Features/Unauthorized';
import { isProtectedRoute } from './Permission';

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

  const { permissions, component: Component } = route;

  if (isLoggedIn && permissions === isProtectedRoute && role === authorizedRole) {
    return <Component />;
  }

  return <Unauthorized />;
};

export default ValidRoute;
