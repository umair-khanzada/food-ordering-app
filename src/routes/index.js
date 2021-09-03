// implement router switch here and also map over route config to map all routes with authguard
import React from 'react';

import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { HomeContainer as Home } from '../Features/Home';
import { LoginContainer as Login } from '../Features/Login';
import AuthRoute from './AuthRoute';
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

  return (
    <Switch>
      {RouteConfig.auth.map((route, index) => {
        return <Route key={index} component={() => <AuthRoute route={route} />} exact path={route.path} />;
      })}
      {isLoggedIn ? <Route component={Home} /> : <Route component={Login} />}
    </Switch>
  );
}
