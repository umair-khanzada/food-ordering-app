import React, { useEffect, useState } from 'react';

import { shallowEqual, useSelector } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/pairs';

import FormComponent from '../../../components/FormComponent';
import { formMessage } from '../actions';

function ResetPassword() {
  const { message, status } = useSelector((state) => {
    const { message, status } = state.responseMessage;
    return { message, status };
  }, shallowEqual);
  useEffect(() => {
    return () => {
      dispatch(formMessage({ message: '', status: 0 }));
    };
  }, []);
  let newPassword = '';

  const validateOnSubmit = () => {
    let isFormValid = true;
    const resetValidateArray = resetForm.map((textField) => {
      if (textField.value == '') {
        isFormValid = false;
        return {
          ...textField,
          errorMessage: textField.name + ' field cannot be empty',
          isValid: false,
        };
      }
      !isFormValid ? null : (isFormValid = textField.isValid);

      return textField;
    });

    setResetPasswordForm(resetValidateArray);

    return isFormValid;
  };

  const resetPasswordClickHandler = (e) => {
    e.preventDefault();
    if (validateOnSubmit()) {
      const userData = {};
      resetForm.map(({ name, value }) => {
        userData[name] = value;
      });
    }
  };
  const textFiledChangeHandler = (e, index) => {
    const { value } = e.target;

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
        responseError={message}
      />
    </div>
  );
}

export default ResetPassword;
