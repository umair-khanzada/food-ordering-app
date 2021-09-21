import React, { useState } from 'react';

import { Grid, Typography, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch } from 'react-redux';

import MainTab from '../../../components/CardMenus/Tabs';
import TemporaryDrawer from '../../../components/Drawer';
import SideMenu from '../../../components/sideMenu';
import { Header, OrderHeading, OrderRef, OrderDetails, UserInfo, FirstTab } from './style';

function Dashboard() {
  const [isDrawerOpen, setOpenDrawer] = useState(false);

  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

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
            <Header>
              <OrderDetails>
                <ArrowBackIcon fontSize="large" style={{ color: '#e91e63' }} />

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
              <MainTab setOpenDrawer={() => dispatch(openDrawer())} setTabValue={setValue} value={value} />
            </FirstTab>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
