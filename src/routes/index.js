import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginContainer from '../Features/Auth/Login/LoginContainer';
import { HomeContainer } from '../Features/Home';
import { isProtectedRoute, isPublicRoute } from './Permission';
import RouteConfig from './RouteConfig';

export default function BaseRouter() {
  const { isLoggedIn } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  }, shallowEqual);

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
        {isLoggedIn
          ? RouteConfig.orderPlacer.map((route, index) => {
              return <Route key={index} component={() => route.component()} exact path={route.path} />;
            })
          : null}
        {RouteConfig.common.map((route, index) => {
          return <Route key={index} component={() => route.component()} exact path={route.path} />;
        })}
        {isLoggedIn &&
          RouteConfig.admin.map((route, index) => {
            return <Route key={index} component={() => route.component()} exact path={route.path} />;
          })}
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
