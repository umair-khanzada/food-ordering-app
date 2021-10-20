import React, { useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import SnackBar from '../../components/AlertMessage';
import AppBar from '../../components/AppBar/AppBar';
import SideMenu from '../../components/sideMenu';
import { updateUserRole } from '../../Features/Auth/actions';
import History from '../../util/History';
import BaseRouter from '../index';
import { FetchUserById } from './request';
function MainContainer() {
  const { isLoggedIn, id, role, isUserRoleChange } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, id, role, isUserRoleChange },
    } = state;
    return { isLoggedIn, id, role, isUserRoleChange };
  }, shallowEqual);
  const dispatch = useDispatch();

  const { data: userById, isFetching, isLoading } = FetchUserById(id, isLoggedIn);

  const baseRouter = <BaseRouter />;
  const snackBar = <SnackBar />;

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
