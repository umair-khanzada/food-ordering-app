import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginContainer from '../Features/Auth/Login/LoginContainer';
import { HomeContainer } from '../Features/Home';
import Roles from '../roles';
import { isProtectedRoute, isPublicRoute } from './Permission';
import routeConfig from './RouteConfig';

export default function BaseRouter() {
  const { isLoggedIn, role } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, role },
    } = state;
    return {
      role,
      isLoggedIn,
    };
  }, shallowEqual);

  const { vendor, admin, user } = Roles;

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
        {routeConfig.auth.map((route, index) => {
          return getAuthenticatedRoute(route, index);
        })}
        {isLoggedIn && role === user
          ? routeConfig.customer.map((route, index) => {
              return <Route key={index} component={() => route.component()} exact path={route.path} />;
            })
          : null}
        {isLoggedIn &&
          routeConfig.common.map((route, index) => {
            return <Route key={index} component={() => route.component()} exact path={route.path} />;
          })}
        {isLoggedIn &&
          role === vendor &&
          routeConfig.vendor.map((route, index) => {
            return <Route key={index} component={() => route.component()} exact path={route.path} />;
          })}
        {isLoggedIn &&
          role === admin &&
          routeConfig.admin.map((route, index) => {
            return <Route key={index} component={() => route.component()} exact path={route.path} />;
          })}
        {isLoggedIn && role === admin && (
          <Route>
            <Redirect to="/orderhistory" />
          </Route>
        )}
        {isLoggedIn && role === vendor && (
          <Route>
            <Redirect to="/menu" />
          </Route>
        )}
        {isLoggedIn && role === user && (
          <Route>
            <Redirect to="/dashboard" />
          </Route>
        )}
        {!isLoggedIn && (
          <Route>
            <Redirect to="/login" />
          </Route>
        )}
      </Switch>
    </>
  );
}
