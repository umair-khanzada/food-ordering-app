import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import FormComponent from '../../../components/FormComponent';
import { resetPassword, setFormMessage } from '../actions';

function ResetPassword() {
  const message = useSelector((state) => {
    const { message } = state.responseMessage;
    return message;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setFormMessage({ message: '', status: 0 }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      const { newpassword, confirmpassword } = userData;
      if (newpassword !== confirmpassword) {
        dispatch(setFormMessage({ message: 'new and confirm password must match', status: 400 }));
      } else {
        dispatch(resetPassword(newpassword));
      }
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
