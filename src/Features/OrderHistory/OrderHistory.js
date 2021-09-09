import React from 'react';

import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SideMenu from '../../components/sideMenu';
import Header from './Header';
import HistoryBar from './HistoryBar';
import MuiVirtualizedTable from './HistoryTable';
const useStyles = makeStyles({
  Bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '50px',
  },
  text: {
    textAlign: 'center',
  },
  table: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    marginRight: '80px',
  },
});
const OrderHistory = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={3}>
        <SideMenu />
      </Grid>
      <Grid item md={9}>
        <Header />
        <Paper className={classes.paper}>
          <div className={classes.Bar}>
            <HistoryBar />
          </div>
          <div className={classes.table}>
            <MuiVirtualizedTable />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OrderHistory;
