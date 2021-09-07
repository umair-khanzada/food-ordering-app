import React, { useState } from 'react';

import FormComponent from '../../../components/FormComponent';
import { validEmail } from '../../../scripts/constants';

function ForgetPassword() {
  const forgetPasswordClickHandler = () => {};
  const textFiledChangeHandler = (e, index) => {
    const { value, name } = e.target;

    setforgetPasswordForm((prev) => {
      const prevForm = [...prev];
      const currentTextField = prevForm[index];

      currentTextField.value = value;
      const getValidationError = currentTextField.getValidation(currentTextField.value);

      [currentTextField.errorMessage, currentTextField.isValid] = getValidationError;
      return prevForm;
    });
  };
  const [forgetPasswordForm, setforgetPasswordForm] = useState([
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
        clickHandler: forgetPasswordClickHandler,
      },
    ],
  };

  return (
    <>
      <FormComponent
        basicButtons={loginButtons}
        changeHandler={textFiledChangeHandler}
        formTitle="Forgot Password"
        inputFields={forgetPasswordForm}
        label="Back to login?"
        navigationPath="/login"
      />
    </>
  );
}

export default ForgetPassword;
