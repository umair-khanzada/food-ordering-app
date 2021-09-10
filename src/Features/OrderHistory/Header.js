import React from 'react';

import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import NestedList from '../Dashboard/List';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  orderHeading: {
    fontWeight: '700',
    marginLeft: '40px',
  },
  orderRef: {
    color: 'lightgrey',
    marginLeft: '10px',
    fontSize: '18px',
    margin: 0,
  },
  orderDetails: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userInfo: {
    paddingRight: '40px',
  },
  tabs: {
    paddingRight: '30px',
  },
  arrowback: {
    display: 'flex',
    justifycontent: 'center',
    alignItems: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box>
      {/* <div className={classes.header}> */}
      <div className={classes.orderDetails}>
        <div className={classes.arrowback}>
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
        {/* </div> */}
      </div>
    </Box>
  );
};
export default Header;
