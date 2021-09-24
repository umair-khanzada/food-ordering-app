import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router';

import Unauthorized from '../Features/Unauthorized';

const ValidRoute = ({ route, authorizedRole }) => {
  console.log({ route, authorizedRole });
  const { isLoggedIn, role } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, role },
    } = state;
    return {
      role,
      isLoggedIn,
    };
  }, shallowEqual);
  const history = useHistory();
  const { component: Component } = route;
  if (!authorizedRole && Boolean(!isLoggedIn)) return <Component />;
  if (Boolean(isLoggedIn) && role === authorizedRole) return <Component />;
  return <Unauthorized />;
};

export default ValidRoute;
