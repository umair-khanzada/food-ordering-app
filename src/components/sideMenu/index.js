import React from 'react';

import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import Roles from '../../roles';
import AdminSideNav from './AdminSideNav';
import UserSideNav from './UserSideNav';
import VendorSideNav from './VendorSideNav';

function SideMenu() {
  const useStyles = makeStyles(() => ({
    drawerPaper: {
      position: 'relative',
      height: '88vh',
      backgroundColor: 'white',
    },
    navigation: {
      marginTop: '50px',
    },

    drawer: {
      height: '615px',
    },
  }));

  const role = useSelector((state) => {
    const {
      authReducer: { role },
    } = state;

    return role;
  });

  const { vendor, admin, user } = Roles;
  const classes = useStyles();

  const { drawer, drawerPaper, navigation, mainDiv } = classes;
  return (
    <div className={mainDiv}>
      <Drawer
        anchor="left"
        classes={{
          paper: drawerPaper,
        }}
        className={drawer}
        variant="permanent"
      >
        <div className={navigation}>
          {role === admin && <AdminSideNav />}

          {role === user && <UserSideNav />}

          {role === vendor && <VendorSideNav />}
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
