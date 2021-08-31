import React from 'react';

import './App.css';
import { withTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import Button from './components/Button';
import { Actions } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => {
    const {
      login_logout: { isLoggedIn },
    } = state;
    return {
      isLogin: isLoggedIn,
    };
  });

  const changeLogin = () => {
    dispatch(Actions.login());
  };

  return (
    <div>
      <h1>is Logged In: {isLogin.toString()} </h1>
      <button onClick={changeLogin} type="button">
        Log In
      </button>
      <Button />

      <Button />
    </div>
  );
};
export default withTheme(App);
