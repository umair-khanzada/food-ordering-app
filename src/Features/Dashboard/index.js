import React from 'react';

import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import MainTab from '../../components/CardMenus/Tabs';
import SideMenu from '../../components/sideMenu';
import NestedList from './List';
function Dashboard() {
  const drawerWidth = 300;
  const useStyles = makeStyles((theme) => ({
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

  const classes = useStyles();
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
                <NestedList />
              </div>
            </div>
            <div className={classes.tabs}>
              <MainTab />
            </div>
            <div />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
