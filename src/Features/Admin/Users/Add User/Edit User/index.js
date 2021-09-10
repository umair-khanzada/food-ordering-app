import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import Header from '../OrderHistory/Header';
const useStyles = makeStyles((theme) => ({
  EditUserRoot: {
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
  EditUserPaper: {
    width: '500px',
    height: '100%',
  },
  EditUsermain: {
    padding: '20px',
  },
  EditUserAvatar: {
    width: '150px',
    height: '150px',
  },
  textstyle: {
    paddingTop: '40px',
    paddingBottom: '40px',
    fontSize: '40px',
    fontWeight: '600',
  },

  EditUserGrid: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  EditUserDiv: {
    width: '49ch',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  EditUserButton: {
    backgroundColor: '#E91E63',
    color: 'white',
    margin: '20px',
    '&:hover': {
      color: 'black',
    },
  },
}));
const EditUser = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.EditUserGrid}>
      {/* <Header /> */}
      <div className={classes.EditUsermain}>
        <Paper className={classes.EditUserPaper}>
          <form autoComplete="off" className={classes.EditUserRoot} noValidate>
            <Avatar className={classes.EditUserAvatar} src="/broken-image.jpg" />
            <Typography className={classes.textstyle} variant="h2">
              Order History
            </Typography>
            <TextField defaultValue="1" id="standard-read-only-input" label="ID" />
            <TextField defaultValue="Fahad Qureshi" id="standard-read-only-input" label="Name" />
            <TextField defaultValue="FahadQureshi@nisum.com" id="standard-read-only-input" label="Email" />
            <TextField defaultValue="123456789" id="standard-read-only-input" label="Contact" />

            <div className={classes.EditUserDiv}>
              <Button className={classes.EditUserButton}>Edit Users</Button>
            </div>
          </form>
        </Paper>
      </div>
    </Grid>
  );
};
export default EditUser;
