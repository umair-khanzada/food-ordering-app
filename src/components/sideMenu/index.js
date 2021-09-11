import React from 'react';

import { Drawer, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function SideMenu() {
  const useStyles = makeStyles(() => ({
    drawer: {
      overflow: 'hidden',
    },
    drawerPaper: {
      position: 'relative',
      height: '100vh',
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
    link: {
      textDecoration: 'none',
    },
  }));
  const classes = useStyles();
  const { drawer, drawerPaper, logo, logoNisum, navigation, list, link } = classes;
  return (
    <div style={{ width: '100%' }}>
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
        <div className={navigation} style={{ position: 'relative', wordWrap: 'break-word' }}>
          <p className={list}>
            <Link className={link} to="/">
              Order History
            </Link>
          </p>
          <p className={list}>
            <Link className={link} to="/">
              Vendor List
            </Link>
          </p>
          <p className={list}>
            <Link className={link} to="/">
              Users List
            </Link>
          </p>
          <p className={list}>
            <Link className={link} to="/">
              Category List
            </Link>
          </p>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
