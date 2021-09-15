import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import FormComponent from '../../../components/FormComponent';
import { emailRegex } from '../../../scripts/constants';
import { login } from '../actions';

function LoginForm() {
  const validateOnSubmit = () => {
    let isValid = true;
    const ValidateArray = loginForm.map((textField) => {
      if (textField.value == '') {
        isValid = false;
        return {
          ...textField,
          errorMessage: textField.name + ' field cannot be empty',
          isValid: false,
        };
      }
      !isValid ? null : (isValid = textField.isValid);
      return textField;
    });

    setLoginForm(ValidateArray);

    return isValid;
  };
  const dispatch = useDispatch();

  const loginClickHandler = (e) => {
    e.preventDefault();
    if (validateOnSubmit()) {
      const userData = {};
      loginForm.map(({ name, value }) => {
        userData[name] = value;
      });

      dispatch(login(userData));
    }
  };
  const textFiledChangeHandler = (e, index) => {
    const { value } = e.target;

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
        if (!emailRegex.test(value)) {
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
          return ['Password must be 8 characters long', false];
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
