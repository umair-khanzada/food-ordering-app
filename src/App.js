import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line import/order
import React from 'react';
// eslint-disable-next-line import/order
import ForgetPassword from './Pages/ForgetPassword';
import { Actions } from './redux/actions';
import Main from './routes/Layout/MainContainer';

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
      <ForgetPassword />
    </div>
  );
};
export default App;
