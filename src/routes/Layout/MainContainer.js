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
    <>
      {isLoggedIn && <AppBar />}
      {/* TopNav should be there*/}
      {/* SideNav should be there */}
      <BaseRouter />
    </>
  );
}

export default MainContainer;
