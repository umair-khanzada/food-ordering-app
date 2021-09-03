import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { clientId } from '../../constants/googleAuth';
import { Actions } from '../../redux/actions';

function Googlelogin() {
  const dispatch = useDispatch();
  const responseGoogle = (response) => {
    dispatch(Actions.login());
  };

  return (
    <div>
      <GoogleLogin clientId={clientId} cookiePolicy="single_host_origin" onSuccess={responseGoogle} />
    </div>
  );
}

export default Googlelogin;
