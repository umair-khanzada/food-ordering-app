import React from 'react';

import { Drawer, IconButton } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector } from 'react-redux';

import Roles from '../../roles';
import AdminSideNav from './AdminSideNav';
import UserSideNav from './UserSideNav';
import VendorSideNav from './VendorSideNav';

function SideMenu({ mobileOpen, handleDrawerToggle, setMobile }) {
  const useStyles = makeStyles(() => ({
    drawerPaper: {
      position: 'absolute',
      minWidth: '250px',
      maxHeight: '88vh',
      backgroundColor: 'white',
      ['@media(min-width:768px)']: {
        marginTop: '85px',
      },
    },
    drawerPaperTemporary: {
      maxHeight: '100vh',
      minWidth: '250px',
    },
    navigation: {
      marginTop: '50px',
    },
    backgroundHover: {
      marginRight: 'auto',
      color: 'grey',
      marginLeft: '5px',
      marginTop: '5px',
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

  const { drawerPaper, drawerPaperTemporary, navigation } = classes;

  const drawer = (
    <div className={navigation}>
      {role === admin && <AdminSideNav drawerToggle={handleDrawerToggle} setMobileView={setMobile} />}

      {role === user && <UserSideNav drawerToggle={handleDrawerToggle} setMobileView={setMobile} />}

      {role === vendor && <VendorSideNav drawerToggle={handleDrawerToggle} setMobileView={setMobile} />}
    </div>
  );

  return (
    <>
      <Hidden implementation="css" xsDown>
        <div>
          <Drawer
            classes={{
              paper: drawerPaperTemporary,
            }}
            onClose={mobileOpen}
            open={mobileOpen}
            variant="temporary"
          >
            <IconButton className={classes.backgroundHover} onClick={handleDrawerToggle}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>

            {drawer}
          </Drawer>
        </div>
      </Hidden>
      <Hidden implementation="css" xsDown>
        <div>
          <Drawer
            classes={{
              paper: drawerPaper,
            }}
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
