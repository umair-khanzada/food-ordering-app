import React from 'react';

import { Grid, ListItemIcon, ListItemText, useTheme, Toolbar } from '@material-ui/core';
import { Lock, OfflineBolt } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from '../../Features/Auth/actions';
import RouteNames from '../../routes/RouteNames';
import AppBarMenuButton from './AppBarMenuButton/AppBarMenuButton';
import { StyledAppBar, StyledDiv, StyledLogo, StyledMenuItem } from './Style';

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  const history = useHistory();

  const { resetPassword } = RouteNames;

  return (
    <StyledDiv>
      <StyledAppBar position="sticky">
        <Toolbar>
          <StyledLogo alt="logo" src="https://www.nisum.com/hubfs/logo_nisum.svg" />
          <Grid alignItems="flex-end" container justifyContent="flex-end">
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
