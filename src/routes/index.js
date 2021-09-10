import React from 'react';

import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import LoginContainer from '../Features/Auth/Login/LoginContainer';
import { HomeContainer } from '../Features/Home';
import { isProtectedRoute, isPublicRoute } from './Permission';
import routeConfig from './RouteConfig';
export default function BaseRouter() {
  const { isLoggedIn } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  });

  const getAuthenticatedRoute = (route, index) => {
    if (isLoggedIn && route.permissions === isProtectedRoute) {
      return <Route key={index} component={() => route.component()} exact path={route.path} />;
    }
    if (!isLoggedIn && route.permissions === isPublicRoute) {
      return <Route key={index} component={() => route.component()} exact path={route.path} />;
    }

    if (isLoggedIn) return <Route key={index} component={() => <HomeContainer />} exact path="/home" />;
    return <Route key={index} component={() => <LoginContainer />} exact path="/login" />;
  };

  return (
    <Switch>
      {routeConfig.auth.map((route, index) => {
        return getAuthenticatedRoute(route, index);
      })}
      {routeConfig.orderPlacer.map((route, index) => {
        return <Route key={index} component={() => route.component()} exact path={route.path} />;
      })}
      <Route component={() => (isLoggedIn ? HomeContainer : LoginContainer)} exact path="/" />
      {isLoggedIn ? <Route component={HomeContainer} /> : <Route component={LoginContainer} />}
    </Switch>
  );
}
