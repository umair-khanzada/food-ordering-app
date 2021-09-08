import React from 'react';

import { Typography, Grid } from '@material-ui/core';

import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import TextField from '../../../components/TextField/TextField';
function ResetPasswordContainer() {
  return (
    <Grid alignItems="center" container direction="column" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Typography variant="h1">Reset Your Password</Typography>
      <br />
      <Card margin="auto" maxwidth="400px" minwidth="300px">
        <div>
          <Typography color="secondary" variant="h3">
            Change Password ?
          </Typography>
          <br />

          <TextField label="Enter old password" type="password" variant="outlined" width="100%" />
          <br />
          <TextField label="Enter new password" type="password" variant="outlined" width="100%" />
          <br />
          <TextField label="Enter repeat password" type="password" variant="outlined" width="100%" />
          <br />
          <Button color="secondary" property="Reset Password" variant="contained" />
        </div>
      </Card>
    </Grid>
  );
}

export default ResetPasswordContainer;
