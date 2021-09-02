/* eslint-disable react/jsx-key */
// eslint-disable-next-line import/order
import React from 'react';
// eslint-disable-next-line import/order
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/order

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import ForgetPassword from './Pages/ForgetPassword';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ResetPassword from './Pages/ResetPassword';

const LoggedInRoutes = [
  <Route component={Home} path="/home" />,
  <Route component={Profile} path="/profile" />,
  <Route component={ResetPassword} path="/reset-password" />,
];

const LoggedOutRoutes = [
  <Route component={Login} path="/login" />,
  <Route component={ForgetPassword} path="/forget-password" />,
];

const App = () => {
  const { isLoggedIn } = useSelector((state) => {
    const {
      login_logout: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  });
  return (
    <div>
      <Router>
        {isLoggedIn && <AppBar />}
        <Switch>
          {[
            !isLoggedIn && LoggedOutRoutes,
            isLoggedIn && LoggedInRoutes,
            isLoggedIn ? (
              <Route key="home">
                <Redirect to="/home" />
              </Route>
            ) : (
              <Route key="login">
                <Redirect to="/login" />
              </Route>
            ),
          ]}
        </Switch>
      </Router>
    </div>
  );
};
export default App;
