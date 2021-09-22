import React from 'react';

import { Drawer, Icon, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Category, History, PeopleAlt } from '@material-ui/icons';
import { useHistory } from 'react-router';

import RouteNames from '../../routes/RouteNames';

function SideMenu() {
  const useStyles = makeStyles(() => ({
    drawerPaper: {
      position: 'relative',
      // height: '88vh',
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
      display: 'flex',
      justifyContent: 'left',
      '&:hover': {
        backgroundColor: '#00B3E3',
        color: 'white',
      },
    },
    mainDiv: {
      width: '100%',
      height: '100%',
    },
    icon: {
      marginRight: '10px',
    },
    drawer: {
      height: '100%',
    },
  }));
  const classes = useStyles();
  const { orderHistory, users, vendors, categories } = RouteNames;
  const history = useHistory();

  const { drawer, drawerPaper, navigation, list, link, icon, mainDiv } = classes;
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
          <p className={list}>
            <IconButton className={link} onClick={() => history.push(orderHistory)}>
              <Icon className={icon}>
                <History />
              </Icon>
              Order History
            </IconButton>
          </p>
          <p className={list}>
            <IconButton className={link} onClick={() => history.push(vendors)}>
              <Icon className={icon}>
                <PeopleAlt />
              </Icon>
              Vendors
            </IconButton>
          </p>
          <p className={list}>
            <IconButton className={link} onClick={() => history.push(users)}>
              <Icon className={icon}>
                <PeopleAlt />
              </Icon>
              Users
            </IconButton>
          </p>
          <p className={list}>
            <IconButton className={link} onClick={() => history.push(categories)}>
              <Icon className={icon}>
                <Category />
              </Icon>
              Categories
            </IconButton>
          </p>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
