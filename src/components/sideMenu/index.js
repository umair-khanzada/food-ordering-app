import React from 'react';

import { Drawer, Icon, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Category, Dashboard, Edit, History, MenuOutlined, PeopleAlt, Person } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Roles from '../../roles';

function SideMenu() {
  const { isLoggedIn, user } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, user },
    } = state;

    return {
      user,

      isLoggedIn,
    };
  });

  const { role } = user;

  const { vendor, admin } = Roles;

  const drawerWidth = '25%';

  const useStyles = makeStyles(() => ({
    drawerPaper: {
      position: 'static',

      height: '100vh',

      backgroundColor: 'white',
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

    icon: {
      marginRight: '10px',
    },
  }));

  const history = useHistory();

  const classes = useStyles();

  const { drawer, drawerPaper, navigation, list, link, icon } = classes;

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
          {role === admin ? (
            <>
              {' '}
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/orderhistory')}>
                  <Icon className={icon}>
                    <History />
                  </Icon>
                  Order History
                </IconButton>
              </p>
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/vendors')}>
                  <Icon className={icon}>
                    <PeopleAlt />
                  </Icon>
                  Vendors
                </IconButton>
              </p>
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/users')}>
                  <Icon className={icon}>
                    <PeopleAlt />
                  </Icon>
                  Users
                </IconButton>
              </p>
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/categories')}>
                  <Icon className={icon}>
                    <Category />
                  </Icon>
                  Category
                </IconButton>
              </p>{' '}
            </>
          ) : null}

          {role === Roles.user ? (
            <>
              {' '}
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/dashboard')}>
                  <Icon className={icon}>
                    <Dashboard />
                  </Icon>
                  Dashboard
                </IconButton>
              </p>
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/profile')}>
                  <Icon className={icon}>
                    <Person />
                  </Icon>
                  Profile
                </IconButton>
              </p>
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/orderhistory')}>
                  <Icon className={icon}>
                    <History />
                  </Icon>
                  Order History
                </IconButton>
              </p>
            </>
          ) : null}

          {role === vendor ? (
            <>
              {' '}
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/menu')}>
                  <Icon className={icon}>
                    <MenuOutlined />
                  </Icon>
                  Menu
                </IconButton>
              </p>
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/categorylist')}>
                  <Icon className={icon}>
                    <Category />
                  </Icon>
                  Category
                </IconButton>
              </p>
              <p className={list}>
                <IconButton className={link} onClick={() => history.push('/orderlist')}>
                  <Icon className={icon}>
                    <Edit />
                  </Icon>
                  Order
                </IconButton>
              </p>
            </>
          ) : null}
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
