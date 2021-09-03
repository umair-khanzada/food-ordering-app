import React, { useState } from 'react';

import { Card, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import { signUp } from './actions';

function SignUpContainer() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUpUser = async () => {
    dispatch(signUp({ email, password }));
  };
  return (
    <Grid alignItems="center" container direction="column" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Typography variant="h1">Sign Up</Typography>
      <br />
      <Card margin="auto" maxWidth="400px" minWidth="300px">
        <div>
          <TextField label="Enter Email" onChange={(e) => setEmail(e.target.value)} type="email" variant="outlined" />
          <br />
          <TextField
            label="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outlined"
          />
          <br />

          <Button color="secondary" onClick={signUpUser} variant="contained">
            Sign Up
          </Button>
        </div>
      </Card>
    </Grid>
  );
}

export default SignUpContainer;
