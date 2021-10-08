/* eslint-disable import/no-named-as-default */
import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Roles from '../roles';
import routeConfig from './RouteConfig';
import RouteNames from './RouteNames';
import ValidRoute from './ValidRoute';

export default function BaseRouter() {
  const { vendor, admin, user } = Roles;

  const { isLoggedIn, role } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, role },
    } = state;
    return {
      role,
      isLoggedIn,
    };
  }, shallowEqual);

  const { orderHistory, menuList, dashboard, login, vendors } = RouteNames;

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
        return <Route key={index} component={() => route.component()} exact path={route.path} />;
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
      {isLoggedIn && role === admin && (
        <Route>
          <Redirect to={vendors} />
        </Route>
      )}
      {isLoggedIn && role === vendor && (
        <Route>
          <Redirect to={menuList} />
        </Route>
      )}
      {isLoggedIn && role === Roles.user && (
        <Route>
          <Redirect to={dashboard} />
        </Route>
      )}
      {!isLoggedIn && (
        <Route>
          <Redirect to={login} />
        </Route>
      )}
    </Switch>
  );
}
