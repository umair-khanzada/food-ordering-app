import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

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
});
const OrderHistory = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.text}>
        <h1>Order History</h1>
      </div>
      <div className={classes.Bar}>
        <HistoryBar />
      </div>
      <div className={classes.table}>
        <MuiVirtualizedTable />
      </div>
    </div>
  );
};

export default OrderHistory;
