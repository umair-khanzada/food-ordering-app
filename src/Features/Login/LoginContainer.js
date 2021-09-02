import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button/Button';
import { Actions } from '../../redux/actions';
function LoginContainer() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => {
    const {
      login_logout: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  });

  const history = useHistory();

  const changeLogin = () => {
    dispatch(Actions.login());
    history.push('/home');
  };
  return (
    <>
      <h1>is Logged In: {isLoggedIn.toString()} </h1>
      <Button color="secondary" onClick={changeLogin} variant="contained">
        Log In
      </Button>
    </>
  );
}

export default LoginContainer;
