import React from 'react';

import { Typography, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import TextField from '../../components/TextField/TextField';
function ForgetPasswordContainer() {
  return (
    <Box p={20}>
      <Grid alignItems="center" container direction="column" justifyContent="center">
        <Typography variant="h1">Reset Your Password</Typography>
        <br />
        <Card margin="auto" maxwidth="400px" minwidth="300px">
          <div>
            <Typography color="secondary" variant="h3">
              Forgot Password ?
            </Typography>
            <br />
            <Typography color="primary" paragraph>
              Enter email associated with your account and we'll send you a link to reset your password
            </Typography>
            <TextField label="Enter Email" type="email" variant="outlined" width="100%" />
            <br />
            <Button color="secondary" variant="contained">
              Reset Password
            </Button>
            <br />
            <br />
            <Link to="/login">Back To Log In</Link>
          </div>
        </Card>
      </Grid>
    </Box>
  );
}

export default ForgetPasswordContainer;
