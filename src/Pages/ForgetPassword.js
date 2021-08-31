import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
// import Container from '../containers/Container';
import TextField from '../components/TextField/TextField';

const ForgetPassword = () => {
  return (
    <>
      <Grid alignItems="center" container direction="column" justify="center" style={{ minHeight: '100vh' }}>
        <Typography variant="h1">Reset Your Password</Typography>
        <br />
        <Card margin="auto" maxWidth={400} minWidth={300}>
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
            <Button color="secondary">Reset Password</Button>
          </div>
        </Card>
      </Grid>
    </>
  );
};

export default ForgetPassword;
