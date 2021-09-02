import React from 'react';

import { GoogleLogout } from 'react-google-login';

// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import { clientId } from '../../constants/googleAuth';

// eslint-disable-next-line import/order
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/order
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
