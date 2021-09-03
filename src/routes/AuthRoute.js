import React from 'react';

import { useSelector } from 'react-redux';

import LoginContainer from '../Features/Auth/Login/LoginContainer';
import { HomeContainer as Home } from '../Features/Home';
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
    return <LoginContainer />;
  };

  return checkRoute();
}

export default AuthRoute;
