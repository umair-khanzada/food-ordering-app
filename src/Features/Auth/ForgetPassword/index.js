import React, { useState } from 'react';

import FormComponent from '../../../components/FormComponent';
import { emailRegex } from '../../../scripts/constants';

function ForgetPassword() {
  const forgetPasswordClickHandler = (e) => {
    e.preventDefault();

    let isValid = true;
    forgetPasswordForm.map((textField) => {
      if (textField.value == '') {
        setforgetPasswordForm((prev) => {
          textField.errorMessage = textField.name + ' field cannot be empty';
          textField.isValid = false;
          return [...prev];
        });
      }

      !isValid ? null : (isValid = textField.isValid);
    });

    if (isValid) {
      const userData = {};
      forgetPasswordForm.map(({ name, value }) => {
        userData[name] = value;
      });
    }
  };
  const textFiledChangeHandler = (e, index) => {
    const { value } = e.target;

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
