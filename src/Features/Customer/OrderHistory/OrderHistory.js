import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HistoryBar from './HistoryBar';
import MuiVirtualizedTable from './HistoryTable';
const useStyles = makeStyles({
  Bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    textAlign: 'center',
  },
  table: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const OrderHistory = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={12}>
        <div className={classes.Bar}>
          <HistoryBar />
        </div>
        <div className={classes.table}>
          <MuiVirtualizedTable />
        </div>
      </Grid>
    </Grid>
  );
};

export default OrderHistory;
