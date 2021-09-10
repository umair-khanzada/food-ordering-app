import React from 'react';

import { Drawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SideMenuLink } from './style';

function SideMenu() {
  const drawerWidth = 300;
  const useStyles = makeStyles(() => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#F0F0F0',
    },

    logo: {
      textAlign: 'center',
      marginTop: '30px',
    },
    logoNisum: {
      color: '#e91e63',
      fontWeight: '600',
    },
    navigation: {
      marginTop: '100px',
      padding: '0 40px',
    },
    list: {
      fontSize: '22px',
      paddingBottom: '40px',
    },
  }));
  const classes = useStyles();
  const { drawer, drawerPaper, logo, logoNisum, navigation, list } = classes;
  return (
    <Drawer
      anchor="left"
      classes={{
        paper: drawerPaper,
      }}
      className={drawer}
      variant="permanent"
    >
      <div className={logo}>
        <Typography variant="h2">
          <span className={logoNisum}>Nisum Foods</span>
        </Typography>
      </div>
      <div className={navigation}>
        <p className={list}>Dashboard</p>
        <p className={list}>Menu</p>
        <p className={list}>Dining Areas</p>

        <SideMenuLink to="/dashboard">
          <p className={list}>Vendor</p>
        </SideMenuLink>
      </div>
    </Drawer>
  );
}

export default SideMenu;
