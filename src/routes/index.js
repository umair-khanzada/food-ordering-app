// implement router switch here and also map over route config to map all routes with authguard
import React from 'react';

import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { isPrivateRoute, isPublicRoute } from './Permission';
import RouteConfig from './RouteConfig';

export default function BaseRouter() {
  const { isLoggedIn } = useSelector((state) => {
    const {
      login_logout: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  });

  const getAllowedRoutes = (route) => {
    if (isLoggedIn && route.permissions === isPrivateRoute) {
      return route.component;
    }
    if (!isLoggedIn && route.permissions === isPublicRoute) {
      return route.component;
    }
  };

  return (
    <>
      <Router>
        <Switch>
          {RouteConfig.auth.map((route, index) => {
            return <Route key={index} component={getAllowedRoutes(route)} exact path={route.path} />;
          })}
        </Switch>
      </Router>
    </>
  );
}
