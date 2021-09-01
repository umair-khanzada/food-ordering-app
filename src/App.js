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
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        {isLoggedIn && <AppBar />}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/forget-password">
            <ForgetPassword />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
