import React, { useEffect, useState } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Snackbar from '../../../components/AlertMessage';
import FormComponent from '../../../components/FormComponent';
import { emailRegex, ERROR, passwordRegex } from '../../../scripts/constants';
import { login, sessionExpireReset, setFormMessage } from '../actions';

function LoginForm() {
  const { message, isLoading, isSessionExpired } = useSelector((state) => {
    const {
      responseMessage: { message },
      authReducer: { isLoading },
      sessionExpireReducer: { isSessionExpired },
    } = state;
    return { message, isLoading, isSessionExpired };
  }, shallowEqual);

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
  const history = useHistory();

  const loginClickHandler = (e) => {
    e.preventDefault();
    if (validateOnSubmit()) {
      const userData = {};
      loginForm.map(({ name, value }) => {
        userData[name] = value;
      });

      dispatch(login({ userData, history }));
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
        if (passwordRegex.test(value) && value.length >= 8) {
          return ['', true];
        }
        return ['Password must be 8 characters long and contains atleast one number and letter', false];
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
        isLoading,
      },
    ],
  };
  useEffect(() => {
    return () => {
      dispatch(setFormMessage({ message: '', status: 0 }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (isSessionExpired) {
        dispatch(sessionExpireReset());
      }
    };
  }, [isSessionExpired]);

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
        responseError={message}
      />
      {isSessionExpired && <Snackbar type={ERROR} />}
    </div>
  );
}

export default LoginForm;
