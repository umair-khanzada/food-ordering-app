import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import Header from '../OrderHistory/Header';
const useStyles = makeStyles((theme) => ({
  AddHistoryRoot: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '16px',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '44ch',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  AddHistoryPaper: {
    width: '500px',
    height: '100%',
  },
  AddHistorymain: {
    padding: '20px',
  },
  AddHistoryAvatar: {
    width: '150px',
    height: '150px',
  },
  textstyle: {
    paddingTop: '40px',
    paddingBottom: '40px',
    fontSize: '40px',
    fontWeight: '600',
  },

  addHistoryGrid: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  AddHistoryDiv: {
    width: '49ch',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  AddHistoryButton: {
    backgroundColor: '#E91E63',
    color: 'white',
    margin: '20px',
    '&:hover': {
      color: 'black',
    },
  },
}));
const AddHistory = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.addHistoryGrid}>
      {/* <Header /> */}
      <div className={classes.AddHistorymain}>
        <Paper className={classes.AddHistoryPaper}>
          <form autoComplete="off" className={classes.AddHistoryRoot} noValidate>
            <Avatar className={classes.AddHistoryAvatar} src="/broken-image.jpg" />
            <Typography className={classes.textstyle} variant="h2">
              Order History
            </Typography>
            <TextField defaultValue="Fahad Qureshi" id="standard-read-only-input" label="Name" />
            <TextField defaultValue="Karhai" id="standard-read-only-input" label="Item" />
            <TextField defaultValue="Bread" id="standard-read-only-input" label="Breat Item" />

            <div className={classes.AddHistoryDiv}>
              <Button className={classes.AddHistoryButton}>Order History</Button>
            </div>
          </form>
        </Paper>
      </div>
    </Grid>
  );
};
export default AddHistory;
