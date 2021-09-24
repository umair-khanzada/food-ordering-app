import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router';

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

  const history = useHistory();
  const { permissions, component: Component } = route;

  if (isLoggedIn && permissions === isProtectedRoute && role === authorizedRole) {
    return <Component />;
  }

  if (!isLoggedIn && window.location.pathname === '/login') history.push('/login');

  return <Unauthorized />;
};

export default ValidRoute;
