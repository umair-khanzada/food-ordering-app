import React from 'react';

import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import SnackBar from '../../components/AlertMessage';
import AppBar from '../../components/AppBar/AppBar';
import SideMenu from '../../components/sideMenu';
import History from '../../util/History';
import BaseRouter from '../index';
function MainContainer() {
  const isLoggedIn = useSelector((state) => {
    const {
      authReducer: { isLoggedIn },
    } = state;
    return isLoggedIn;
  });

  const baseRouter = <BaseRouter />;
  const snackBar = <SnackBar />;

  return (
    <Router history={History}>
      {isLoggedIn ? (
        <>
          <AppBar />
          <Grid container direction="row">
            <Grid item style={{ position: 'relative' }} xs={2}>
              <SideMenu />
            </Grid>
            <Grid item xs={10}>
              {baseRouter}
            </Grid>
          </Grid>
          {snackBar}
        </>
      ) : (
        <>
          {baseRouter}
          {snackBar}
        </>
      )}
    </Router>
  );
}

export default MainContainer;
