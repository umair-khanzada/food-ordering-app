import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginContainer from '../Features/Auth/Login/LoginContainer';
import { HomeContainer } from '../Features/Home';
import Unauthorize from '../Features/Unauthorized';
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

  const getValidRoute = (route, index, authorizedRole) => {
    if (isLoggedIn && route.permissions === isProtectedRoute && role === authorizedRole) {
      return <Route key={index} component={() => route.component()} exact path={route.path} />;
    }
    if (!isLoggedIn && route.permissions === isPublicRoute && role === authorizedRole) {
      return <Route key={index} component={() => route.component()} exact path={route.path} />;
    }
    return <Route key={index} component={Unauthorize} exact path={route.path} />;
  };

  return (
    <Switch>
      <Route component={Unauthorize} exact path="/unauthorize" />
      {routeConfig.auth.map((route, index) => {
        return getAuthenticatedRoute(route, index);
      })}
      {routeConfig.common.map((route, index) => {
        return <Route key={index} component={() => route.component()} exact path={route.path} />;
      })}
      {routeConfig.customer.map((route, index) => {
        // return <ValidRoute key={index} authorizedRole="user" route={route} />;
        return getValidRoute(route, index, 'user');
      })}
      {routeConfig.vendor.map((route, index) => {
        // return <ValidRoute key={index} authorizedRole="vendor" route={route} />;
        return getValidRoute(route, index, 'vendor');
      })}
      {routeConfig.admin.map((route, index) => {
        // return <ValidRoute key={index} authorizedRole="admin" route={route} />;
        return getValidRoute(route, index, 'admin');
      })}
      {role === admin && (
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
  );
}
