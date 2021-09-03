import React from 'react';

import { GoogleLogin } from 'react-google-login';

// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import { clientId } from '../../constants/googleAuth';
// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import { Actions } from '../../redux/actions';

// eslint-disable-next-line import/order
import { useDispatch } from 'react-redux';

function Googlelogin() {
  const dispatch = useDispatch();
  const responseGoogle = (response) => {
    dispatch(Actions.login());
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        cookiePolicy="single_host_origin"
        // onFailure={responseGoogle}
        onSuccess={responseGoogle}
      />
    </div>
  );
}

export default Googlelogin;
