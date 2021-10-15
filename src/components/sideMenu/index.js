import React from 'react';

import { Drawer, IconButton } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';

import Roles from '../../roles';
import AdminSideNav from './AdminSideNav';
import UserSideNav from './UserSideNav';
import VendorSideNav from './VendorSideNav';

function SideMenu({ mobileOpen, handleDrawerToggle }) {
  const useStyles = makeStyles(() => ({
    drawerPaper: {
      position: 'absolute',
      width: '100%',
      height: '88vh',
      backgroundColor: 'white',
    },
    navigation: {
      marginTop: '50px',
    },
    closeMenuButton: {
      marginRight: 'auto',
      marginLeft: 0,
    },
  }));
  const theme = useTheme();

  const role = useSelector((state) => {
    const {
      authReducer: { role },
    } = state;

    return role;
  });

  const { vendor, admin, user } = Roles;
  const classes = useStyles();

  const { drawerPaper, navigation } = classes;
  const drawer = (
    <div className={navigation}>
      {role === admin && <AdminSideNav />}

      {role === user && <UserSideNav />}

      {role === vendor && <VendorSideNav />}
    </div>
  );

  return (
    <>
      <Hidden implementation="css" xsDown>
        <div>
          <Drawer
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            classes={{
              paper: drawerPaper,
            }}
            onClose={mobileOpen}
            open={mobileOpen}
            variant="temporary"
          >
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon className={classes.closeMenuButton} />
            </IconButton>
            {drawer}
          </Drawer>
        </div>
      </Hidden>
      <Hidden implementation="css" xsDown>
        <div>
          <Drawer
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            classes={{
              paper: drawerPaper,
            }}
            onClose={handleDrawerToggle}
            open={mobileOpen}
            variant="permanent"
          >
            {drawer}
          </Drawer>
        </div>
      </Hidden>
    </>
  );
}

export default SideMenu;
