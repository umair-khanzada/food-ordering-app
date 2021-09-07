import React from 'react';

import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { clientId } from '../../constants/googleAuth';
import { Actions } from '../../redux/actions';

function Googlelogout() {
  const dispatch = useDispatch();
  const onSuccess = () => {
    dispatch(Actions.logout());
  };
  return (
    <div>
      <GoogleLogout buttonText="logout" clientId={clientId} onLogoutSuccess={onSuccess} />
    </div>
  );
}

export default Googlelogout;
