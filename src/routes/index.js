import React from 'react';

import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import LoginContainer from '../Features/Auth/Login/LoginContainer';
import { HomeContainer } from '../Features/Home';
import Roles from '../roles';
import { isProtectedRoute, isPublicRoute } from './Permission';
export default function BaseRouter() {
  const { isLoggedIn, user } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, user },
    } = state;
    return {
      user,
      isLoggedIn,
    };
  });

  const { role } = user;

  const { vendor, admin } = Roles;

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
    <>
      <Switch>
        {RouteConfig.auth.map((route, index) => {
          return getAuthenticatedRoute(route, index);
        })}
        {isLoggedIn && role === Roles.user
          ? RouteConfig.orderPlacer.map((route, index) => {
            return <Route key={index} component={() => route.component()} exact path={route.path} />;
          })
          : null}
        {isLoggedIn &&
          RouteConfig.common.map((route, index) => {
            return <Route key={index} component={() => route.component()} exact path={route.path} />;
          })}
        {isLoggedIn && role === admin
          ? RouteConfig.admin.map((route, index) => {
            return <Route key={index} component={() => route.component()} exact path={route.path} />;
          })
          : null}
        {isLoggedIn ? (
          <Route>
            <Redirect to="/home" />
          </Route>
        ) : (
          <Route>
            <Redirect to="/login" />
          </Route>
        )}
      </Switch>
    </>
  );
}
