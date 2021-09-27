import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Roles from '../roles';
import routeConfig from './RouteConfig';
import ValidRoute from './ValidRoute';

export default function BaseRouter() {
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
    </Switch>
  );
}
