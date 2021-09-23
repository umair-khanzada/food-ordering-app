import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Route } from 'react-router';

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

  const { permissions, component, path } = route;

  if (isLoggedIn && permissions === isProtectedRoute && role === authorizedRole) {
    return <Route component={() => component()} exact path={path} />;
  }
  if (!isLoggedIn && permissions === isPublicRoute && role === authorizedRole) {
    return <Route component={() => component()} exact path={path} />;
  }
  return <Route component={Unauthorized} exact path={path} />;
};

export default ValidRoute;
