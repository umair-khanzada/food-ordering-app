import React from 'react';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppBar from '../../components/AppBar/AppBar';
import BaseRouter from '../index';

function MainContainer() {
  const { isLoggedIn } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  });

  return (
    <Router>
      {isLoggedIn && <AppBar />}
      {/* TopNav should be there*/}
      {/* SideNav should be there */}
      <BaseRouter />
    </Router>
  );
}

export default MainContainer;
