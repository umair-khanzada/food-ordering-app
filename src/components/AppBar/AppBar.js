import React from 'react';

import { Grid, ListItemIcon, ListItemText, useTheme, Toolbar, IconButton } from '@material-ui/core';
import { Lock, OfflineBolt, ShoppingCart } from '@material-ui/icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from '../../Features/Auth/actions';
import { openDrawer } from '../../Features/Customer/actions';
import Roles from '../../roles';
import RouteNames from '../../routes/RouteNames';
import Drawer from '../Drawer';
import AppBarMenuButton from './AppBarMenuButton/AppBarMenuButton';
import { StyledAppBar, StyledDiv, StyledLogo, StyledMenuItem } from './Style';

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const logOut = () => {
    dispatch(logout({ history }));
  };

  const {
    cart: { length: cartItemCount },
    role,
  } = useSelector((state) => {
    const {
      addtocartReducers: { cart },
      authReducer: { role },
    } = state;

    return { cart, role };
  }, shallowEqual);
  const { resetPassword } = RouteNames;

  const { user } = Roles;

  return (
    <StyledDiv>
      <StyledAppBar position="sticky">
        <Toolbar>
          <StyledLogo alt="logo" src="https://www.nisum.com/hubfs/logo_nisum.svg" />
          <Grid alignItems="flex-end" container justifyContent="flex-end">
            {role === user && (
              <>
                <Drawer />
                <IconButton onClick={() => dispatch(openDrawer())}>
                  <span style={{ position: 'absolute', top: 0, right: '8px', color: 'red', fontSize: '16px' }}>
                    {cartItemCount === 0 ? null : cartItemCount}
                  </span>
                  <ShoppingCart />
                </IconButton>
              </>
            )}

            <AppBarMenuButton>
              <StyledMenuItem onClick={() => history.push(resetPassword)} theme={theme}>
                <ListItemIcon>
                  <Lock fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Reset Password" />
              </StyledMenuItem>
              <StyledMenuItem onClick={logOut} theme={theme}>
                <ListItemIcon>
                  <OfflineBolt fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
              </StyledMenuItem>
            </AppBarMenuButton>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </StyledDiv>
  );
};

export default NavBar;
