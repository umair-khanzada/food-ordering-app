/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
import React from 'react';

import { useSelector } from 'react-redux';

import AppBar from '../../components/AppBar/AppBar';
import BaseRouter from '../index';

function MainContainer() {
  const { isLoggedIn } = useSelector((state) => {
    const {
      login_logout: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  });

  return (
    <div>
      {isLoggedIn && <AppBar />}
      {/* TopNav should be there*/}
      {/* SideNav should be there */}
      <BaseRouter />
    </div>
  );
}

export default MainContainer;
