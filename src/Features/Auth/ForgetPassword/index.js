import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import FormComponent from '../../../components/FormComponent';
import { emailRegex } from '../../../scripts/constants';
import { forgotPassword } from '../actions';

function ForgetPassword() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => {
    const { message, status } = state.responseMessage;
    return { message, status };
  });
  const validateOnSubmit = () => {
    let isValid = true;
    const ValidateArray = forgetPasswordForm.map((textField) => {
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

    setforgetPasswordForm(ValidateArray);

    return isValid;
  };

  const forgetPasswordClickHandler = (e) => {
    e.preventDefault();

    if (validateOnSubmit()) {
      const userData = {};
      forgetPasswordForm.map(({ name, value }) => {
        userData[name] = value;
      });

      dispatch(forgotPassword(userData));
    }
  };
  useEffect(() => {
    if (status === 200) {
      history.push('/login');
    }
  });
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
        responseError={message}
      />
    </>
  );
}

export default ForgetPassword;
