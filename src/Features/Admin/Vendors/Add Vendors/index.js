import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import Header from '../OrderHistory/Header';
const useStyles = makeStyles((theme) => ({
  AddVendorsRoot: {
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
  AddVendorsPaper: {
    width: '500px',
    height: '100%',
  },
  AddVendorsmain: {
    padding: '20px',
  },
  AddVendorsAvatar: {
    width: '150px',
    height: '150px',
  },
  textstyle: {
    paddingTop: '40px',
    paddingBottom: '40px',
    fontSize: '40px',
    fontWeight: '600',
  },

  addVendorsyGrid: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  AddVendorsDiv: {
    width: '49ch',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  AddVendorsButton: {
    backgroundColor: '#E91E63',
    color: 'white',
    margin: '20px',
    '&:hover': {
      color: 'black',
    },
  },
}));
const AddVendors = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.addVendorsyGrid}>
      {/* <Header /> */}
      <div className={classes.AddVendorsmain}>
        <Paper className={classes.AddVendorsPaper}>
          <form autoComplete="off" className={classes.AddVendorsRoot} noValidate>
            <Avatar className={classes.AddVendorsAvatar} src="/broken-image.jpg" />
            <Typography className={classes.textstyle} variant="h2">
              Add Vendor
            </Typography>
            <TextField defaultValue="1" id="standard-read-only-input" label="ID" />
            <TextField defaultValue="Fahad Qureshi" id="standard-read-only-input" label="Name" />
            <TextField defaultValue="RS 250/=" id="standard-read-only-input" label="Price" />
            <TextField defaultValue="Karhai" id="standard-read-only-input" label="Menu" />
            <TextField defaultValue="Barbar" id="standard-read-only-input" label="Vendor Name" />

            <div className={classes.AddVendorsDiv}>
              <Button className={classes.AddVendorsButton}>Add Vendors</Button>
            </div>
          </form>
        </Paper>
      </div>
    </Grid>
  );
};
export default AddVendors;
