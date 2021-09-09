import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import Header from '../OrderHistory/Header';
const useStyles = makeStyles((theme) => ({
  AddUserRoot: {
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
  paperAddUser: {
    width: '500px',
    height: '100%',
  },
  mainAddUser: {
    padding: '20px',
  },
  Useravatar: {
    width: '150px',
    height: '150px',
  },
  textstyle: {
    paddingBottom: '40px',
    paddingTop: '40px',
    fontSize: '40px',
    fontWeight: '600',
  },

  gridAddUser: {
    // marginTop: '11px',
    display: 'flex',
    justifyContent: 'center',
  },
  btnAddUser: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  addUserButton: {
    backgroundColor: '#E91E63',
    color: 'white',
    margin: '20px',
    '&:hover': {
      color: 'black',
    },
  },
}));
const AddUser = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.gridAddUser} item md={12}>
        {/* <Header /> */}
        <div className={classes.mainAddUser}>
          <Paper className={classes.paperAddUser}>
            <form autoComplete="off" className={classes.AddUserRoot} noValidate>
              <Avatar className={classes.Useravatar} src="/broken-image.jpg" />
              <Typography className={classes.textstyle} variant="h2">
                Add User
              </Typography>
              <TextField defaultValue="Fahad Qureshi" id="standard-read-only-input" label="Name" />

              <TextField defaultValue="fahadqureshy23@gmail.com" id="standard-read-only-input" label="Email" />
              <TextField defaultValue="03161359848" id="standard-read-only-input" label="Number" />
              <div className={classes.btnAddUser}>
                <Button className={classes.addUserButton}>Add User</Button>
              </div>
            </form>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};
export default AddUser;
