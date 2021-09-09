import React from 'react';

import { Grid, ListItemIcon, ListItemText, AppBar, useTheme, Toolbar } from '@material-ui/core';
import { History, Lock, MoreVert, OfflineBolt, PersonRounded } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { logout } from '../../Features/Auth/actions';
import AppBarMenuButton from './AppBarMenuButton/AppBarMenuButton';
import { StyledDiv, StyledMenuItem } from './Style';

const NavBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  const history = useHistory();

  return (
    <StyledDiv>
      <AppBar color="secondary" position="sticky">
        <Toolbar>
          <Grid alignItems="flex-end" container justifyContent="flex-end">
            <AppBarMenuButton buttonIcon={<MoreVert />}>
              <StyledMenuItem onClick={() => history.push('/profile')} theme={theme}>
                <ListItemIcon>
                  <PersonRounded fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </StyledMenuItem>
              <StyledMenuItem onClick={() => history.push('/reset-password')} theme={theme}>
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
              <StyledMenuItem onClick={() => history.push('/dashboard')} theme={theme}>
                <ListItemIcon>
                  <History fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="History" />
              </StyledMenuItem>
            </AppBarMenuButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
};

export default NavBar;
