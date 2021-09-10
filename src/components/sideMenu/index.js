import React from 'react';

import { Button, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

function SideMenu() {
  // const drawerWidth = 300;
  const useStyles = makeStyles(() => ({
    drawerPaper: {
      position: 'static',
      height: '100vh',
      backgroundColor: '#F0F0F0',
    },
    navigation: {
      marginTop: '50px',
      // padding: '0 50px',
    },
    list: {
      fontSize: '22px',
      paddingBottom: '40px',
    },
    link: {
      borderRadius: '0px',
      color: 'black',
      fontSize: '20px',
      fontWeight: '200',
      width: '100%',
      '&:hover': {
        backgroundColor: '#e91e63',
        color: 'white',
      },
    },
  }));

  const history = useHistory();
  const classes = useStyles();
  const { drawer, drawerPaper, navigation, list, link } = classes;
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
        <div className={navigation} style={{ position: 'relative', wordWrap: 'break-word' }}>
          <p className={list}>
            <Button className={link} onClick={() => history.push('/orderhistory')}>
              Order History
            </Button>
          </p>
          <p className={list}>
            <Button className={link} onClick={() => history.push('/vendors')}>
              Vendors
            </Button>
          </p>
          <p className={list}>
            <Button className={link} onClick={() => history.push('/users')}>
              Users
            </Button>
          </p>
          <p className={list}>
            <Button className={link} onClick={() => history.push('/categories')}>
              Category
            </Button>
          </p>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
