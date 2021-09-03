import React from 'react';

import { useSelector } from 'react-redux';

import { HomeContainer as Home } from '../Features/Home';
import { LoginContainer as Login } from '../Features/Login';
import { isProtectedRoute, isPublicRoute } from './Permission';

function AuthRoute({ route }) {
  const { isLoggedIn } = useSelector((state) => {
    const {
      login_logout: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  });

  const checkRoute = () => {
    if (isLoggedIn && route.permissions === isProtectedRoute) {
      return route.component();
    }
    if (!isLoggedIn && route.permissions === isPublicRoute) {
      return route.component();
    }

    if (isLoggedIn) return <Home />;
    return <Login />;
  };

  return checkRoute();
}

export default AuthRoute;
