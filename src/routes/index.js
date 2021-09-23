import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginContainer from '../Features/Auth/Login/LoginContainer';
import { HomeContainer } from '../Features/Home';
import Unauthorized from '../Features/Unauthorized';
import Unauthorize from '../Features/Unauthorized';
import Roles from '../roles';
import { isProtectedRoute, isPublicRoute } from './Permission';
import routeConfig from './RouteConfig';
import ValidRoute from './ValidRoute';

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
    console.log(authorizedRole, role);
    if (isLoggedIn && route.permissions === isProtectedRoute && role === authorizedRole) {
      console.log('called');
      return route.component();
    }
    return <Unauthorized />;
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
        return (
          <Route
            key={index}
            component={() => <ValidRoute authorizedRole={user} route={route} />}
            exact
            path={route.path}
          />
        );
      })}
      {routeConfig.vendor.map((route, index) => {
        return (
          <Route
            key={index}
            component={() => <ValidRoute authorizedRole={vendor} route={route} />}
            exact
            path={route.path}
          />
        );
      })}
      {routeConfig.admin.map((route, index) => {
        return (
          <Route
            key={index}
            component={() => <ValidRoute authorizedRole={admin} route={route} />}
            exact
            path={route.path}
          />
        );
      })}
      {role === admin && (
        <Route>
          <Redirect to="/orderHistory" />
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
