import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { ToggleOff, ToggleOn } from '@material-ui/icons';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useDispatch } from 'react-redux';

import FormComponent from '../../../components/FormComponent';
import { signup } from '../actions';

function SignUpForm() {
  const [signUpForm, setSignUpForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();

  const signUpClickHandler = () => {
    dispatch(signup({ name: signUpForm.username, email: signUpForm.email, password: signUpForm.password }));
  };

  const textFiledChangeHandler = (e) => {
    const { value, name } = e.target;

    setSignUpForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const signupInputs = {
    fields: [
      {
        required: true,
        label: 'Email',
        name: 'email',
        type: 'email',
        value: signUpForm?.email || '',
        changeHandler: textFiledChangeHandler,
      },
      {
        required: true,
        label: 'UserName',
        name: 'username',
        type: 'text',
        value: signUpForm?.username || '',
        changeHandler: textFiledChangeHandler,
      },
      {
        required: true,
        label: 'Password',
        name: 'password',
        type: 'password',
        minlength: '6',
        value: signUpForm?.password || '',
        changeHandler: textFiledChangeHandler,
      },
      {
        required: true,
        label: 'Contact No',
        name: 'contact',
        type: 'text',
        value: signUpForm?.contact || '',
        changeHandler: textFiledChangeHandler,
      },
    ],
  };
  const signupButtons = {
    button: [
      {
        type: 'button',
        name: 'SignUp',
        minWidth: '100%',
        clickHandler: signUpClickHandler,
      },
    ],
  };

  return (
    <Grid
      alignItems="center"
      container
      direction="row"
      justifyContent="center"
      spacing={3}
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        {' '}
        <Typography align="center" variant="h2">
          Sign Up as
        </Typography>
      </Grid>
      <Grid item>
        Customer{' '}
        <ToggleButton
          onChange={() => {
            setSelected(!selected);
          }}
          selected={selected}
          value="check"
        >
          {selected ? <ToggleOn color="primary" /> : <ToggleOff color="secondary" />}
        </ToggleButton>{' '}
        Vendor
      </Grid>

      <Grid item xs={12}>
        <FormComponent
          basicButtons={signupButtons}
          formTitle="Sign UP"
          inputFields={signupInputs}
          label="Back to Login"
          navigationPath="/login"
        />
      </Grid>
    </Grid>
  );
}

export default SignUpForm;
