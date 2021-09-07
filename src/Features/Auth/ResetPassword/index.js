import React, { useState } from 'react';

import FormComponent from '../../../components/FormComponent';

function ResetPassword() {
  const resetPasswordClickHandler = () => {};
  const textFiledChangeHandler = (e, index) => {
    const { value, name } = e.target;

    setResetPasswordForm((prev) => {
      const prevForm = [...prev];
      const currentTextField = prevForm[index];

      currentTextField.value = value;
      const getValidationError = currentTextField.getValidation(currentTextField.value);

      [currentTextField.errorMessage, currentTextField.isValid] = getValidationError;
      return prevForm;
    });
  };
  const [resetForm, setResetPasswordForm] = useState([
    {
      required: true,
      label: 'Old Password',
      name: 'oldpassword',
      type: 'password',
      value: '',
      isValid: true,
      errorMessage: '',
      getValidation: (value) => {
        if (value.length < 8) {
          return ['Password should be 8 letters', false];
        }
        return ['', true];
      },
    },
    {
      required: true,
      label: 'New Password',
      name: 'newpassword',
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
    {
      required: true,
      label: 'Confirm Password',
      name: 'confirmpassword',
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
        name: 'Reset Password',
        minWidth: '100%',
        clickHandler: resetPasswordClickHandler,
      },
    ],
  };

  return (
    <div>
      <FormComponent
        basicButtons={loginButtons}
        changeHandler={textFiledChangeHandler}
        formTitle="Reset Password"
        inputFields={resetForm}
        navigationPath="/signup"
      />
    </div>
  );
}

export default ResetPassword;
