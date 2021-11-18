import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import SnackBar from '../../components/AlertMessage';
import AppBar from '../../components/AppBar/AppBar';
import { updateUserRole } from '../../Features/Auth/actions';
import BaseRouter from '../index';
import { FetchUserById } from './request';
import { BaseRouterGrid } from './style';
function MainContainer() {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      if (window.swUpdateReady) {
        window.swUpdateReady = false;
        window.stop();
        window.location.reload();
      }
    });
  }, []);

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
    <>
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
    </>
  );
}

export default MainContainer;
