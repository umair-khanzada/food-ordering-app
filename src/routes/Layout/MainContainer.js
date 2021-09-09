import React from 'react';

import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppBar from '../../components/AppBar/AppBar';
import SideMenu from '../../components/sideMenu';
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
    <Grid
      // alignItems="center"
      container
      direction="row"
      // justifyContent="center"
      spacing={3}
      style={{ height: '100%' }}
    >
      <Router>
        <Grid item style={{ paddingRight: '0px', height: '100%' }} xs={2}>
          <SideMenu />
        </Grid>
        <Grid item style={{ paddingRight: '0px', paddingLeft: '0px' }} xs={10}>
          {isLoggedIn && <AppBar />}
          <BaseRouter />
        </Grid>
        {/* TopNav should be there*/}
        {/* SideNav should be there */}
      </Router>
    </Grid>
  );
}

export default MainContainer;
