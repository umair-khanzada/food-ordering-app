import React from 'react';

import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';

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
    backgroundColor: '#E91E63',
    color: 'white',
    padding: '9px',
  },
}));
const EditVendor = (props) => {
  const classes = useStyles();

  const setData = (key, value) => {
    // data[key] = value;
  };

  return (
    <Grid container>
      <Grid className={classes.grid} item md={9}>
        <div className={classes.main}>
          <Paper className={classes.paper}>
            <form autoComplete="off" className={classes.root} noValidate>
              <Avatar className={classes.avatar} src="/broken-image.jpg" />
              <TextField
                className={classes.text}
                defaultValue="Fahad"
                InputProps={{
                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="Name"
                onChange={(e) => setData('name', e.target.value)}
              />
              <TextField
                defaultValue="fahadqureshy23@gmail.com"
                InputProps={{
                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="Email"
                onChange={(e) => setData('email', e.target.value)}
              />
              <TextField
                defaultValue="03161359848"
                InputProps={{
                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="Contact"
                onChange={(e) => setData('contact', e.target.value)}
              />
              <TextField
                defaultValue="03161359848"
                InputProps={{
                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="Timing"
                onChange={(e) => setData('timing', e.target.value)}
              />
              <TextField
                defaultValue="03161359848"
                InputProps={{
                  className: classes.text,
                  endAdornment: (
                    <InputAdornment>
                      <CreateIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
                label="Building"
                onChange={(e) => setData('building', e.target.value)}
              />
              <div className={classes.btncontainer}>
                <Button className={classes.btn}>Save Changes</Button>{' '}
              </div>
            </form>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};
export default EditVendor;
