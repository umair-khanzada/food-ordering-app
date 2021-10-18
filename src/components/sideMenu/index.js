import React from 'react';

import { Drawer } from '@material-ui/core';
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
      minWidth: '250px',
      minHeight: '88vh',
      backgroundColor: 'white',
    },
    navigation: {
      marginTop: '50px',
    },
    backgroundHover: {
      marginRight: 'auto',
      marginLeft: '10px',
      marginTop: '10px',
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
      {role === admin && <AdminSideNav drawerToggle={handleDrawerToggle} />}

      {role === user && <UserSideNav drawerToggle={handleDrawerToggle} />}

      {role === vendor && <VendorSideNav drawerToggle={handleDrawerToggle} />}
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
            <CloseIcon className={classes.backgroundHover} onClick={handleDrawerToggle} />

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
