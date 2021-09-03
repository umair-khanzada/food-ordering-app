import React from 'react';

import { Card, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import { login } from './actions';

function LoginContainer() {
  const dispatch = useDispatch();

  const credential = {
    email: '',
    password: '',
  };
  const logIn = () => {
    dispatch(login({ email: credential.email, password: credential.password }));
  };
  const handleChange = (e) => {
    const { name, value } = e;
    credential[name] = value;
  };

  return (
    <Grid alignItems="center" container direction="column" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Typography variant="h1">Log In</Typography>
      <br />
      <Card margin="auto" maxWidth="400px" minWidth="300px">
        <br />
        <div>
          <TextField
            label="Enter Email"
            onChange={(e) => {
              handleChange(e);
            }}
            type="email"
            variant="outlined"
          />
          <br />
          <TextField
            label="Enter Password"
            onChange={(e) => {
              handleChange(e);
            }}
            type="password"
            variant="outlined"
          />
          <br />

          <Button
            color="secondary"
            onClick={(e) => (credential.email && credential.password ? logIn() : null)}
            variant="contained"
          >
            Log In
          </Button>
        </div>
      </Card>
    </Grid>
  );
}

export default LoginContainer;
