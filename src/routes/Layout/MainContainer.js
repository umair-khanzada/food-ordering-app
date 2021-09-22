import React from 'react';

import { Grid } from '@material-ui/core';
import { useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppBar from '../../components/AppBar/AppBar';
import Loader from '../../components/Loader';
import SideMenu from '../../components/sideMenu';
import BaseRouter from '../index';
function MainContainer() {
  const { isLoggedIn, isLoading } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn },
      loaderReducer: { isLoading },
    } = state;
    return {
      isLoggedIn,
      isLoading,
    };
  }, shallowEqual);

  const baseRouter = <BaseRouter />;

  return (
    <Router>
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
        <>{isLoading ? <Loader /> : baseRouter}</>
      )}
    </Router>
  );
}

export default MainContainer;
