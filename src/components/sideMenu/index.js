import React from 'react';

import { Button, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

import RouteNames from '../../routes/RouteNames';

function SideMenu() {
  const useStyles = makeStyles(() => ({
    drawerPaper: {
      position: 'static',
      height: '100vh',
      backgroundColor: 'white',
    },
    navigation: {
      marginTop: '50px',
    },
    list: {
      fontSize: '22px',
      paddingBottom: '40px',
    },
    link: {
      borderRadius: '0px',
      color: '#717271',
      fontSize: '20px',
      fontWeight: '200',
      width: '100%',
      '&:hover': {
        backgroundColor: '#00B3E3',
        color: 'white',
      },
    },
  }));
  const classes = useStyles();
  const { orderHistory } = RouteNames;
  const history = useHistory();

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
            <Button className={link} onClick={() => history.push(orderHistory)}>
              Order History
            </Button>
          </p>
          <p className={list}>
            <Button className={link} to="/">
              Vendor List
            </Button>
          </p>
          <p className={list}>
            <Button className={link} to="/">
              Users List
            </Button>
          </p>
          <p className={list}>
            <Button className={link} to="/">
              Category List
            </Button>
          </p>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
