import React, { useState } from 'react';

import { Typography, Grid, Box } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import TextField from '../../../components/TextField/TextField';
import { forgotPassword } from '../actions';

function ForgetPasswordContainer() {
  const [email, setEmail] = useState({
    email: '',
  });
  const [password, setpassword] = useState({
    password: '',
  });
  const dispatch = useDispatch();
  const sendEmail = () => {
    // console.log(email);
    // console.log(password)
    dispatch(forgotPassword({ email, password }));
  };
  return (
    <Box p={20}>
      <Grid alignItems="center" container direction="column" justify="center">
        <Typography color="primary" variant="h1">
          Reset Your Password
        </Typography>
        <br />
        <Card margin="auto" maxwidth="400px" minwidth="300px">
          <div>
            <Typography color="secondary" variant="h3">
              Forgot Password ?
            </Typography>
            <br />
            <Typography color="info" paragraph>
              Enter email associated with your account and we'll send you a link to reset your password
            </Typography>
            <TextField
              changeHandler={(e) => {
                setEmail(e.target.value);
              }}
              label="Enter Email"
              type="email"
              variant="outlined"
              width="100%"
            />
            <TextField
              changeHandler={(e) => {
                setpassword(e.target.value);
              }}
              label="Enter password"
              type="password"
              variant="outlined"
              width="100%"
            />
            <br />
            <br />
            <Button
              color="secondary"
              fontSize="16px"
              onClick={() => sendEmail()}
              property="Reset Password"
              variant="contained"
            />
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
