import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import SnackBar from '../../components/AlertMessage';
import AppBar from '../../components/AppBar/AppBar';
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

  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen((prev) => !prev);
  }

  return (
    <Router history={History}>
      {isLoggedIn ? (
        <>
          <AppBar handleDrawerToggle={handleDrawerToggle} />
          <Grid container direction="row">
            <Grid item style={{ position: 'relative' }} xs={2} />
            <Grid item md={10} xs={12}>
              {baseRouter}
            </Grid>
          </Grid>
          ` ` {snackBar}
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
