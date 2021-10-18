import React, { useEffect } from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import Roles from '../roles';
import routeConfig from './RouteConfig';
import RouteNames from './RouteNames';
import ValidRoute from './ValidRoute';

export default function BaseRouter() {
  const { vendor, admin, user } = Roles;

  const { role, isLoggedIn, id, isUserRoleChange } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, role, id, isUserRoleChange },
    } = state;

    return {
      role,
      isLoggedIn,
      id,
      isUserRoleChange,
    };
  }, shallowEqual);
  const history = useHistory();

  useEffect(() => {
    if (isUserRoleChange) {
      if (role === user) {
        history.push('/dashboard');
      } else if (role === vendor) {
        history.push('/menu');
      }
    }
  }, [isUserRoleChange]);

  const { menuList, dashboard, login, vendors } = RouteNames;

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
