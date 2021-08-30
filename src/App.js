import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from './redux/actions';
const App = () => {
  const currentUser = useSelector((state) => state.login_logout.isLoggedIn);
  const dispatch = useDispatch();
  const changeLogin = () => {
    dispatch(Actions.login());
  };

  return (
    <div>
      <h1>is Logged In: {currentUser.toString()} </h1>
      <button onClick={() => changeLogin()} type="button">
        Log In
      </button>
    </div>
  );
};
export default App;
