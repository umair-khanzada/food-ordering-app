import React, { useEffect, useState } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FormComponent from '../../../components/FormComponent';
import { emailRegex, passwordRegex } from '../../../scripts/constants';
import { login, setFormMessage } from '../actions';

function LoginForm() {
  const { message, isLoading } = useSelector((state) => {
    const {
      responseMessage: { message },
      authReducer: { isLoading },
    } = state;
    return { message, isLoading };
  }, shallowEqual);

  const validateOnSubmit = () => {
    let isValid = true;
    const ValidateArray = loginForm.map((textField) => {
      if (textField.value == '') {
        const { name } = textField;
        isValid = false;
        return {
          ...textField,
          errorMessage: name.charAt(0).toUpperCase() + name.slice(1) + ' field cannot be empty',
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
          return ['Invalid email', false];
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

  return (
    <div>
      <FormComponent
        basicButtons={loginButtons}
        changeHandler={textFiledChangeHandler}
        formTitle="Login"
        inputFields={loginForm}
        label="Create New Account?"
        navigationPath="/signup"
        responseError={message}
      />
    </div>
  );
}

export default LoginForm;
