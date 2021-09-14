import React from 'react';

import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppBar from '../../components/AppBar/AppBar';
import Drawer from '../../components/Drawer/index';
import SideMenu from '../../components/sideMenu';
import Roles from '../../roles';
import BaseRouter from '../index';

function MainContainer() {
  const { isLoggedIn, user } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, user },
    } = state;
    return {
      user,
      isLoggedIn,
    };
  });

  const { role } = user;

  const { vendor, admin } = Roles;
  const baseRouter = <BaseRouter />;

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <AppBar />
          <Grid container direction="row">
            <Grid item xs={2}>
              <SideMenu />
            </Grid>
            <Grid item xs={isLoggedIn && role === Roles.user ? 8 : 10}>
              {baseRouter}
            </Grid>
            {isLoggedIn && role === Roles.user ? (
              <Grid item xs={2}>
                <Drawer />
              </Grid>
            ) : (
              false
            )}
          </Grid>
        </>
      ) : (
        baseRouter
      )}
    </Router>
  );
}

export default MainContainer;
