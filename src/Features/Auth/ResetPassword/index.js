import React, { useState } from 'react';

import FormComponent from '../../../components/FormComponent';

function ResetPassword() {
  let newPassword = '';
  const resetPasswordClickHandler = (e) => {
    e.preventDefault();

    let isValid = true;
    resetForm.map((textField) => {
      if (textField.value == '') {
        setResetPasswordForm((prev) => {
          textField.errorMessage = textField.name + ' field cannot be empty';
          textField.isValid = false;
          return [...prev];
        });
      }

      !isValid ? null : (isValid = textField.isValid);
    });

    if (isValid) {
      const userData = {};
      resetForm.map(({ name, value }) => {
        userData[name] = value;
      });
    }
  };
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
          return ['Password must be 8 characters long', false];
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
        newPassword = value;
        if (value.length < 8) {
          return ['Password must be 8 characters long', false];
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
        if (value !== newPassword) {
          return ['Confirm Password does not match', false];
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
