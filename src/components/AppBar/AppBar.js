import React from 'react';

import { Grid, ListItemIcon, ListItemText } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Lock, MoreVert, OfflineBolt, PersonRounded } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Actions } from '../../redux/actions';
import AppBarMenuButton from './AppBarMenuButton/AppBarMenuButton';
import { StyledDiv, StyledMenuItem } from './Style';

const MenuAppBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    dispatch(Actions.logout());
    history.push('/login');
  };

  return (
    <StyledDiv>
      <AppBar position="sticky">
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
            </AppBarMenuButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
};

export default MenuAppBar;
