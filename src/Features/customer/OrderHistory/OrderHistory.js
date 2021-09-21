import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HistoryBar from './HistoryBar';
import HistoryTable from './HistoryTable';
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
  paper: {
    width: '100%',
    padding: '6px 20px',
    marginTop: '30px',
    height: '80vh',
    borderRadius: '24px 0 24px 0',
  },
});
const OrdersHistory = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={12}>
        <div className={classes.Bar}>
          <HistoryBar />
        </div>
        <div className={classes.table}>
          <HistoryTable />
        </div>
      </Grid>
    </Grid>
  );
};

export default OrdersHistory;
