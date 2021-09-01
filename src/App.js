/* eslint-disable import/no-named-as-default-member */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { withTheme } from '@material-ui/core/styles';

import { Actions } from './redux/actions';
import Button from './components/Button';
// eslint-disable-next-line import/no-named-as-default
import CardMenu from './components/CardMenus/CardMenus';

const App = () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => {
    return {
      isLogin: state.login_logout.isLoggedIn,
    };
  });

  const changeLogin = () => {
    dispatch(Actions.login());
  };

  return (
    <div>
      <h1>is Logged In: {isLogin.toString()} </h1>
      <button onClick={() => changeLogin()} type="button">
        Log In
      </button>
      <Button />
      <CardMenu />
    </div>
  );
};
export default withTheme(App);
