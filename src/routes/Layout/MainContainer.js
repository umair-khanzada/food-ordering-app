import React from 'react';

import { Grid } from '@material-ui/core';
import { useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppBar from '../../components/AppBar/AppBar';
import SideMenu from '../../components/sideMenu';
import History from '../../util/History';
import BaseRouter from '../index';
function MainContainer() {
  const { isLoggedIn } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn },
    } = state;
    return {
      isLoggedIn,
    };
  }, shallowEqual);

  const baseRouter = <BaseRouter />;
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
        </>
      ) : (
        baseRouter
      )}
    </Router>
  );
}

export default MainContainer;
