/* eslint-disable no-debugger */
import React, { useState } from 'react';

import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch } from 'react-redux';

import MainTab from '../../components/CardMenus/Tabs';
import TemporaryDrawer from '../../components/Drawer';
import SideMenu from '../../components/sideMenu';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  orderHeading: {
    fontWeight: '700',
    marginLeft: '40px',
  },
  orderRef: {
    color: 'lightgrey',
    paddingLeft: '10px',
    paddingTop: '8px',
    fontSize: '18px',
  },
  orderDetails: {
    display: 'flex',
  },
  userInfo: {
    paddingRight: '40px',
  },
  tabs: {
    paddingRight: '30px',
  },
}));

function Dashboard() {
  // const [values, setValues] = useState(0);

  const classes = useStyles();
  const [isDrawerOpen, setOpenDrawer] = useState(false);

  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  // const isDrawerOpen = useSelector((state) => state.addtocartReducers.isDrawerOpen);
  // const dispatch = useDispatch();
  // debugger;
  // console.log('value', values);

  function toggleDrawer() {
    setOpenDrawer(!isDrawerOpen);
  }

  const openDrawer = () => {
    setOpenDrawer(true);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <SideMenu />
        </Grid>
        <Grid item md={9}>
          <Box>
            <div className={classes.header}>
              <div className={classes.orderDetails}>
                <ArrowBackIcon fontSize="large" style={{ color: '#e91e63' }} />

                <Typography className={classes.orderHeading} noWrap style={{ marginLeft: '40px' }} variant="h2">
                  New Order
                </Typography>

                <Typography className={classes.orderRef} noWrap paragraph>
                  #023025
                </Typography>
              </div>

              <div className={classes.userInfo}>
                <Typography variant="h4">
                  <b> Arham Ahmed</b>
                </Typography>
                <Typography color="textSecondary" component="p" variant="h4">
                  Waiter
                </Typography>
              </div>
            </div>
            <div className={classes.tabs}>
              <TemporaryDrawer />
              <MainTab setOpenDrawer={() => dispatch(openDrawer())} setTabValue={setValue} value={value} />
            </div>

            <div />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
