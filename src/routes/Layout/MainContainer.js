import React from 'react';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

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
      {!isLoggedIn}
      {/* TopNav should be there*/}
      {/* SideNav should be there */}
      <BaseRouter />
    </Router>
  );
}

export default MainContainer;
