import React from 'react';

import { LoginContainer } from './Features/Login';

const App = () => {
  return (
    <div>
      {/* <h1>is Logged In: {isLogin.toString()} </h1> */}
      {/* <button onClick={changeLogin} type="button">
        Log In
      </button>
      <ForgetPassword /> */}
      <LoginContainer />
    </div>
  );
};
export default App;
