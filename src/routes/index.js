// implement router switch here and also map over route config to map all routes with authguard
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import RouteConfig from './RouteConfig';

export default function BaseRouter() {
  return (
    <>
      <Router>
        <Switch>
          {RouteConfig.auth.map((route, index) => {
            return <Route key={index} component={route.component} exact path={route.path} />;
          })}
        </Switch>
      </Router>
    </>
  );
}
