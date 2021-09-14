import React from 'react';

import { Grid, ListItemIcon, ListItemText, AppBar, useTheme, Toolbar, makeStyles, IconButton } from '@material-ui/core';
import { Lock, MoreVert, OfflineBolt } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from '../../Features/Auth/actions';
import { openDrawer } from '../../Features/Customer/actions';
import Roles from '../../roles/index';
import RouteNames from '../../routes/RouteNames';
import AppBarMenuButton from './AppBarMenuButton/AppBarMenuButton';
import { StyledDiv, StyledMenuItem } from './Style';

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  const useStyles = makeStyles(() => ({
    logoNisum: {
      color: 'white',
      width: '100%',
      fontWeight: '600',
      fontSize: '30px',
    },
    NisumImageLogo: {
      height: '80px',
      minwidth: '160px',
      marginLeft: '20px',
    },
  }));
  const classes = useStyles();
  const history = useHistory();
  const { NisumImageLogo } = classes;
  const { profile, resetPassword } = RouteNames;

  const cartItemCount = useSelector((state) => {
    const {
      addtocartReducers: { cart },
    } = state;

    return cart.length;
  });

  const { isLoggedIn, user } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, user },
    } = state;
    return {
      user,
      isLoggedIn,
    };
  });

  return (
    <StyledDiv>
      <AppBar position="sticky" style={{ background: 'white', borderBottom: '5px solid #00B3E3' }}>
        <Toolbar>
          <img alt="logo" className={NisumImageLogo} src="https://www.nisum.com/hubfs/logo_nisum.svg" />
          <Grid alignItems="flex-end" container justifyContent="flex-end">
            {isLoggedIn && user.role === Roles.user ? (
              <IconButton onClick={() => dispatch(openDrawer())}>
                <span style={{ position: 'absolute', top: 0, right: '8px', color: 'red', fontSize: '16px' }}>
                  {cartItemCount === 0 ? null : cartItemCount}
                </span>
                <ShoppingCartIcon />
              </IconButton>
            ) : null}

            <AppBarMenuButton buttonIcon={<MoreVert />}>
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
      </AppBar>
    </StyledDiv>
  );
};

export default NavBar;
