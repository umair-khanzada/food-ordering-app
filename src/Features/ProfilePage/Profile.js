import React from 'react';

import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';

import SideMenu from '../../components/sideMenu/index';
import Header from '../OrderHistory/Header';
const useStyles = makeStyles((theme) => ({
  root: {
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
  paper: {
    width: '100%',
    borderRadius: '24px 0 24px 0',
    height: '90vh',
  },
  main: {
    padding: '20px',
  },
  avatar: {
    width: '150px',
    height: '150px',
  },
  icon: {
    fontSize: '1rem',
  },
  gird: {
    marginTop: '11px',
  },
  btncontainer: {
    width: '44ch',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: '#e91e63',
    color: 'white',
    padding: '9px',
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={3}>
        <SideMenu />
      </Grid>
      <Grid className={classes.grid} item md={9}>
        <Header />
        <div className={classes.main}>
          <Paper className={classes.paper}>
            <form autoComplete="off" className={classes.root} noValidate>
              <Avatar className={classes.avatar} src="/broken-image.jpg" />
              <TextField
                className={classes.text}
                defaultValue="Fahad"
                id="standard-read-only-input"
                InputProps={{
                  readOnly: true,

                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="First Name"
              />
              <TextField
                defaultValue="Ali"
                id="standard-read-only-input"
                InputProps={{
                  readOnly: true,

                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="Last Name"
              />
              <TextField
                defaultValue="fahadqureshy23@gmail.com"
                id="standard-read-only-input"
                InputProps={{
                  readOnly: true,
                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="Email"
              />
              <TextField
                defaultValue="03161359848"
                id="standard-read-only-input"
                InputProps={{
                  readOnly: true,

                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="Number"
              />
              <div className={classes.btncontainer}>
                <Button className={classes.btn}>Edit Profile</Button>{' '}
              </div>
            </form>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};
export default Profile;
