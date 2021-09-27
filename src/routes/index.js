import React, { lazy, Suspense } from 'react';

import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loader from '../components/Loader';
import Roles from '../roles';
import routeConfig from './RouteConfig';
// import ValidRoute from './ValidRoute';

export default function BaseRouter() {
  const { vendor, admin, user } = Roles;
  const ValidRoute = lazy(() => import('./ValidRoute'));

  const { isLoggedIn, role } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, role },
    } = state;
    return {
      role,
      isLoggedIn,
    };
  });

  return (
    <Switch>
      {routeConfig.auth.map((route, index) => {
        return (
          <Route
            key={index}
            exact
            path={route.path}
            render={() => (
              <Suspense fallback={<Loader />}>
                <ValidRoute authorizedRole={null} route={route} />
              </Suspense>
            )}
          />
        );
      })}
      {routeConfig.common.map((route, index) => {
        return <Route key={index} component={() => route.component()} exact path={route.path} />;
      })}
      {routeConfig.customer.map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          render={() => (
            <Suspense fallback={<Loader />}>
              <ValidRoute authorizedRole={user} route={route} />
            </Suspense>
          )}
        />
      ))}
      {routeConfig.vendor.map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          render={() => (
            <Suspense fallback={<Loader />}>
              <ValidRoute authorizedRole={vendor} route={route} />
            </Suspense>
          )}
        />
      ))}
      {routeConfig.admin.map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          render={() => (
            <Suspense fallback={<Loader />}>
              <ValidRoute authorizedRole={admin} route={route} />
            </Suspense>
          )}
        />
      ))}
      {isLoggedIn && role === admin ? (
        <Route>
          <Redirect to="/orderhistory" />
        </Route>
      ) : null}
      {isLoggedIn && role === vendor ? (
        <Route>
          <Redirect to="/menu" />
        </Route>
      ) : null}
      {isLoggedIn && role === user ? (
        <Route>
          <Redirect to="/dashboard" />
        </Route>
      ) : null}
      {!isLoggedIn ? (
        <Route>
          <Redirect to="/login" />
        </Route>
      ) : null}
    </Switch>
  );
}
