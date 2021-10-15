import React from 'react';

import { Grid, ListItemIcon, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { CircularProgress } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from '../../Features/Auth/actions';
import { openDrawer } from '../../Features/Customer/actions';
import Roles from '../../roles';
import Drawer from '../Drawer';
import { LogoutButton, StyledAppBar, StyledDiv, StyledLogo, UserName } from './Style';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const NavBar = ({ handleDrawerToggle }) => {
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
  const { name, isLoading } = useSelector((state) => {
    const {
      authReducer: { name, isLoading },
    } = state;
    return {
      name,
      isLoading,
    };
  }, shallowEqual);

  const { user } = Roles;

  const classes = useStyles();

  return (
    <StyledDiv>
      <StyledAppBar position="sticky">
        <Toolbar>
          <IconButton
            aria-label="Open drawer"
            className={classes.menuButton}
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon style={{ color: 'black' }} />
          </IconButton>
          <StyledLogo alt="logo" src="https://www.nisum.com/hubfs/logo_nisum.svg" />
          <Grid alignItems="center" container justifyContent="flex-end">
            {role === user && (
              <>
                <Drawer />
                <IconButton onClick={() => dispatch(openDrawer())}>
                  <span style={{ position: 'absolute', top: 0, right: '8px', color: 'red', fontSize: '16px' }}>
                    {cartItemCount === 0 ? null : cartItemCount}
                  </span>
                  <ShoppingCart />
                </IconButton>
                <UserName>{name}</UserName>
              </>
            )}

            {isLoading ? (
              <CircularProgress />
            ) : (
              <ListItemIcon>
                <IconButton>
                  <LogoutButton fontSize="large" onClick={logOut} />
                </IconButton>
              </ListItemIcon>
            )}
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </StyledDiv>
  );
};

export default NavBar;
