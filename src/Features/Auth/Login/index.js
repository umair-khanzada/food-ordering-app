import React, { useState } from 'react';

import axios from 'axios';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';

import FormComponent from '../../../components/FormComponent';
import { emailRegex } from '../../../scripts/constants';
import { loginSuccess, loginError } from '../actions';

async function loginUser(userData) {
  console.log('userdata', userData);
  // eslint-disable-next-line no-return-await
  // try {
  //   return await (
  //     await fetch('http://localhost:4000/v1/auth/login', {
  //       method: 'POST',
  //       body: JSON.stringify(userData),
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then()
  //       .catch()
  //   ).json();
  // } catch (err) {
  //   throw new Error(err);
  // }
  //
  // const res = await fetch('http://localhost:4000/v1/auth/login', {
  //   method: 'POST',
  //   body: JSON.stringify(userData),
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // });
  // if (!res.ok) {
  //   throw new Error('error has been occured');
  // }
  // return res.json();
  const res = await axios.post('http://localhost:4000/v1/auth/login', userData);
  return res;
}

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

      // dispatch(login(userData));
      mutate(userData);
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

  const { mutate, mutateAsync, isLoading, error } = useMutation(loginUser, {
    onSuccess: (response) => {
      // console.log('done user');
      const {
        data: {
          user: { name },
          tokens: { refresh, access },
        },
      } = response;
      dispatch(
        loginSuccess({
          name,
          refreshToken: refresh,
          accessToken: access,
        }),
      );
    },
    onError: () => {
      dispatch(loginError());
    },
  });
  console.log('loading', isLoading);
  console.log('error', error);
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
