import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import FormComponent from '../../../components/FormComponent';
import { validEmail } from '../../../scripts/constants';
import { login } from '../actions';

function LoginForm() {
  const dispatch = useDispatch();

  const loginClickHandler = () => {
    dispatch(login({ email: loginForm.email, password: loginForm.password }));
  };
  const textFiledChangeHandler = (e, index) => {
    const { value, name } = e.target;

    setLoginForm((prev) => {
      const prevForm = [...prev];
      const currentTextField = prevForm[index];

      currentTextField.value = value;
      const getValidationError = currentTextField.getValidation(currentTextField.value);

      [currentTextField.errorMessage, currentTextField.isValid] = getValidationError;
      return prevForm;
    });
  };
  const [loginForm, setLoginForm] = useState([
    {
      required: true,
      label: 'Email',
      name: 'email',
      type: 'email',
      value: '',
      isValid: true,
      errorMessage: '',
      getValidation: (value) => {
        if (!validEmail.test(value)) {
          return ['Email type is not valid', false];
        }
        return ['', true];
      },
    },
    {
      required: true,
      label: 'Password',
      name: 'password',
      type: 'password',
      minlength: '6',
      isValid: true,
      value: '',
      errorMessage: '',
      getValidation: (value) => {
        if (value.length < 8) {
          return ['Password should be 8 letters', false];
        }
        return ['', true];
      },
    },
  ]);

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
        changeHandler={textFiledChangeHandler}
        forgotPassword="Forgot Password?"
        formTitle="Login"
        inputFields={loginForm}
        label="Create New Account?"
        navigationPath="/signup"
      />
    </div>
  );
}

export default LoginForm;
