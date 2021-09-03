import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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
