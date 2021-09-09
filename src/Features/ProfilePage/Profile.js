import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

      width: '25ch',
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <form autoComplete="off" className={classes.root} noValidate>
      <Avatar src="/broken-image.jpg" />
      <TextField
        defaultValue="Fahad"
        id="standard-read-only-input"
        InputProps={{
          readOnly: true,
        }}
        label="First Name"
      />
      <TextField
        defaultValue="Ali"
        id="standard-read-only-input"
        InputProps={{
          readOnly: true,
        }}
        label="Last Name"
      />
      <TextField
        defaultValue="fahadqureshy23@gmail.com"
        id="standard-read-only-input"
        InputProps={{
          readOnly: true,
        }}
        label="Email"
      />
      <TextField
        defaultValue="03161359848"
        id="standard-read-only-input"
        InputProps={{
          readOnly: true,
        }}
        label="Number"
      />
    </form>
  );
};
export default Profile;
