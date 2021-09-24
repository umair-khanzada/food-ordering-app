import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Roles from '../roles';
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

  return (
    <Switch>
      {routeConfig.auth.map((route, index) => {
        return (
          <Route
            key={index}
            component={() => <ValidRoute authorizedRole={null} route={route} />}
            exact
            path={route.path}
          />
        );
      })}
      {routeConfig.common.map((route, index) => {
        return (
          <Route
            key={index}
            component={() => <ValidRoute authorizedRole={user} route={route} />}
            exact
            path={route.path}
          />
        );
      })}
      {routeConfig.customer.map((route, index) => (
        <Route
          key={index}
          component={() => <ValidRoute authorizedRole={user} route={route} />}
          exact
          path={route.path}
        />
      ))}
      {routeConfig.vendor.map((route, index) => (
        <Route
          key={index}
          component={() => <ValidRoute authorizedRole={vendor} route={route} />}
          exact
          path={route.path}
        />
      ))}
      {routeConfig.admin.map((route, index) => (
        <Route
          key={index}
          component={() => <ValidRoute authorizedRole={admin} route={route} />}
          exact
          path={route.path}
        />
      ))}
      {/* {role === admin && (
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
      )} */}
    </Switch>
  );
}
