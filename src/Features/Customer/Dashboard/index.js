import React from 'react';

import { Grid, Typography, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch } from 'react-redux';

import MainTab from '../../../components/CardMenus/Tabs';
import TemporaryDrawer from '../../../components/Drawer';
import SideMenu from '../../../components/sideMenu';
import { openDrawer } from '../actions';
import { Header, OrderHeading, OrderRef, OrderDetails, UserInfo, FirstTab } from './style';
function Dashboard() {
  const dispatch = useDispatch();

  return (
    <div>
      <Grid container>
        <Grid item md={3}>
          <SideMenu />
        </Grid>
        <Grid item md={9}>
          <Box>
            <Header>
              <OrderDetails>
                <ArrowBackIcon fontSize="large" />

                <OrderHeading noWrap variant="h2">
                  New Order
                </OrderHeading>

                <OrderRef noWrap paragraph>
                  #023025
                </OrderRef>
              </OrderDetails>

              <UserInfo>
                <Typography variant="h4">
                  <b> Arham Ahmed</b>
                </Typography>
                <Typography color="textSecondary" component="p" variant="h4">
                  Waiter
                </Typography>
              </UserInfo>
            </Header>
            <FirstTab>
              <TemporaryDrawer />
              <MainTab setOpenDrawer={() => dispatch(openDrawer())} />
            </FirstTab>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
