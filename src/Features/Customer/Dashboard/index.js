import React from 'react';

import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import MainTab from '../../../components/CardMenus/Tabs';
import TemporaryDrawer from '../../../components/Drawer';
import { openDrawer } from '../actions';
import { FirstTab } from './style';
function Dashboard() {
  const dispatch = useDispatch();

  return (
    <div>
      <Grid container>
        <Grid item md={9}>
          <Box>
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
