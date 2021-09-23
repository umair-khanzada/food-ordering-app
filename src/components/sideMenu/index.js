import React from 'react';

import { Drawer, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Category, Dashboard, Edit, History, MenuOutlined, PeopleAlt, Person } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Roles from '../../roles';
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
      paddingLeft: '10px',
      textDecoration: 'none',
      borderRadius: '0px',
      color: '#717271',
      fontSize: '20px',
      fontWeight: '200',
      width: '100%',
      display: 'flex',
      justifyContent: 'left',
      '&:hover': {
        textDecoration: 'none',
        cursor: 'pointer',
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

  const { isLoggedIn, role } = useSelector((state) => {
    const {
      authReducer: { isLoggedIn, role },
    } = state;

    return {
      role,

      isLoggedIn,
    };
  });

  const { vendor, admin, user } = Roles;
  const classes = useStyles();
  const { orderHistory, users, vendors, categories, categoryList, dashboard, profile, orderList, menuList } =
    RouteNames;
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
          {role === admin ? (
            <>
              <p className={list}>
                <Link className={link} to={orderHistory}>
                  <Icon className={icon}>
                    <History />
                  </Icon>
                  Order History
                </Link>
              </p>
              <p className={list}>
                <Link className={link} to={vendors}>
                  <Icon className={icon}>
                    <PeopleAlt />
                  </Icon>
                  Vendors
                </Link>
              </p>
              <p className={list}>
                <Link className={link} to={users}>
                  <Icon className={icon}>
                    <PeopleAlt />
                  </Icon>
                  Users
                </Link>
              </p>
              <p className={list}>
                <Link className={link} to={categories}>
                  <Icon className={icon}>
                    <Category />
                  </Icon>
                  Category
                </Link>
              </p>{' '}
            </>
          ) : null}

          {role === user ? (
            <>
              {' '}
              <p className={list}>
                <Link className={link} to={dashboard}>
                  <Icon className={icon}>
                    <Dashboard />
                  </Icon>
                  Dashboard
                </Link>
              </p>
              <p className={list}>
                <Link className={link} to={profile}>
                  <Icon className={icon}>
                    <Person />
                  </Icon>
                  Profile
                </Link>
              </p>
              <p className={list}>
                <Link className={link} to={orderHistory}>
                  <Icon className={icon}>
                    <History />
                  </Icon>
                  Order History
                </Link>
              </p>
            </>
          ) : null}

          {role === vendor ? (
            <>
              {' '}
              <p className={list}>
                <Link className={link} to={menuList}>
                  <Icon className={icon}>
                    <MenuOutlined />
                  </Icon>
                  Menu
                </Link>
              </p>
              <p className={list}>
                <Link className={link} to={categoryList}>
                  <Icon className={icon}>
                    <Category />
                  </Icon>
                  Category
                </Link>
              </p>
              <p className={list}>
                <Link className={link} to={orderList}>
                  <Icon className={icon}>
                    <Edit />
                  </Icon>
                  Order
                </Link>
              </p>
            </>
          ) : null}
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
