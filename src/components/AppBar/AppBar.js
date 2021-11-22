import React, { useState } from 'react';

import { ListItemIcon, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { CircularProgress } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from '../../Features/Auth/actions';
import { openDrawer } from '../../Features/Customer/actions';
import Roles from '../../roles';
import Drawer from '../Drawer';
import SideMenu from '../sideMenu';
import {
  LogoutButton,
  ShoppingCartIcon,
  StyledAppBar,
  StyledDiv,
  StyledLogo,
  UserName,
  NameLogoutContainer,
  CartItemQuantity,
} from './Style';
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
const NavBar = () => {
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
  function handleDrawerToggle() {
    setMobileOpen((prev) => !prev);
  }
  const firstname = name.split(' ')[0];
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <StyledDiv>
      <StyledAppBar position="sticky">
        <Toolbar padding="0px">
          <IconButton
            aria-label="Open drawer"
            className={classes.menuButton}
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon style={{ color: 'grey' }} />
          </IconButton>
          <StyledLogo alt="logo" src="https://www.nisum.com/hubfs/logo_nisum.svg" />
          <NameLogoutContainer alignItems="center" container>
            {role === user && (
              <>
                <Drawer />
                <IconButton onClick={() => dispatch(openDrawer())}>
                  {cartItemCount > 0 && (
                    <CartItemQuantity>{cartItemCount === 0 ? null : cartItemCount}</CartItemQuantity>
                  )}
                  <ShoppingCartIcon />
                </IconButton>
              </>
            )}
            {isLoading ? (
              <CircularProgress />
            ) : (
              <>
                <UserName>{firstname}</UserName>
                <ListItemIcon>
                  <IconButton onClick={logOut}>
                    <LogoutButton fontSize="large" />
                  </IconButton>
                </ListItemIcon>
              </>
            )}
          </NameLogoutContainer>
        </Toolbar>
      </StyledAppBar>
      <div>
        <SideMenu handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} setMobile={setMobileOpen} />
      </div>
    </StyledDiv>
  );
};
export default NavBar;
