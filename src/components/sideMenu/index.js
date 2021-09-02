import React from 'react';

import { Drawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function SideMenu() {
  const drawerWidth = 300;
  const useStyles = makeStyles((theme) => ({
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
      padding: '0 50px',
    },
    list: {
      fontSize: '22px',
      paddingBottom: '40px',
    },
  }));
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
      variant="permanent"
    >
      <div className={classes.logo}>
        <Typography variant="h2">
          <span className={classes.logoNisum}>Nisum Foods</span>
        </Typography>
      </div>
      <div className={classes.navigation}>
        <p className={classes.list}>Dashboard</p>
        <p className={classes.list}>Menu</p>
        <p className={classes.list}>Dining Areas</p>
      </div>
    </Drawer>
  );
}

export default SideMenu;
