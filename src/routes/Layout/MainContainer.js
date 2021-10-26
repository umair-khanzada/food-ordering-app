import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import SnackBar from '../../components/AlertMessage';
import AppBar from '../../components/AppBar/AppBar';
import { updateUserRole } from '../../Features/Auth/actions';
import History from '../../util/History';
import BaseRouter from '../index';
import { FetchUserById } from './request';
import { BaseRouterGrid } from './style';
function MainContainer() {
  const { isLoggedIn, id, role, isUserRoleChange } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, id, role, isUserRoleChange },
    } = state;
    return { isLoggedIn, id, role, isUserRoleChange };
  }, shallowEqual);
  const dispatch = useDispatch();

  const { data: userById } = FetchUserById(id, isLoggedIn);

  const baseRouter = <BaseRouter />;
  const snackBar = <SnackBar />;

  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen((prev) => !prev);
  }
  useEffect(() => {
    if (userById) {
      const { role } = userById;

      dispatch(updateUserRole({ role }));
    }
  }, [userById]);

  return (
    <Router history={History}>
      {isLoggedIn ? (
        <>
          <AppBar handleDrawerToggle={handleDrawerToggle} />
          <Grid container direction="row">
            <Grid item style={{ position: 'relative' }} xs={2} />
            <BaseRouterGrid item md={10} xs={12}>
              {baseRouter}
            </BaseRouterGrid>
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
