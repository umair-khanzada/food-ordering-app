import React, { useEffect, useState } from 'react';

import { Typography, Grid, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import TextField from '../../../components/TextField/TextField';
import { forgotPassword } from '../actions';

function ForgetPasswordContainer() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const { message, status } = useSelector((state) => {
    const { message, status } = state.responseMessage;
    return { message, status };
  });

  const sendEmail = () => {
    dispatch(forgotPassword(login));
  };
  useEffect(() => {
    if (status === 200) {
      history.push('/login');
    }
  });
  function loginForm(e) {
    const { name, value } = e.target;

    setLogin(() => {
      return { ...login, [name]: value };
    });
  }

  return (
    <Box p={20}>
      <Grid alignItems="center" container direction="column" justifyContent="center">
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
            <Typography paragraph>
              Enter email associated with your account and we'll send you a link to reset your password
            </Typography>
            <TextField
              changeHandler={(e) => {
                loginForm(e);
              }}
              label="Enter Email"
              name="email"
              type="email"
              variant="outlined"
              width="100%"
            />
            <TextField
              changeHandler={(e) => {
                loginForm(e);
              }}
              label="Enter password"
              name="password"
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
            <p style={{ color: 'red' }}>{message}</p>

            <Link to="/login">Back To Log In</Link>
          </div>
        </Card>
      </Grid>
    </Box>
  );
}

export default ForgetPasswordContainer;
