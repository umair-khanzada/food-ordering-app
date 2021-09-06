import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import FormComponent from '../../../components/FormComponent';
import { login } from '../actions';

function LoginForm() {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const loginClickHandler = () => {
    console.log('asdsad');
    dispatch(login({ email: loginForm.email, password: loginForm.password }));
  };

  const textFiledChangeHandler = (e) => {
    const { value, name } = e.target;

    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const loginInputs = {
    fields: [
      {
        required: true,
        label: 'Email',
        name: 'email',
        type: 'email',
        value: loginForm?.email || '',
        changeHandler: textFiledChangeHandler,
      },
      {
        required: true,
        label: 'Password',
        name: 'password',
        type: 'password',
        minlength: '6',
        value: loginForm?.password || '',
        changeHandler: textFiledChangeHandler,
      },
    ],
  };
  const loginButtons = {
    button: [
      {
        type: 'submit',
        name: 'login',
        minWidth: '100%',
        clickHandler: loginClickHandler,
      },
    ],
  };

  return (
    <div>
      <FormComponent
        basicButtons={loginButtons}
        forgotPassword="Forgot Password?"
        formTitle="Login"
        inputFields={loginInputs}
        label="Create New Account?"
        navigationPath="/signup"
      />
    </div>
  );
}

export default LoginForm;
