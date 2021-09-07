import React, { useState } from 'react';

import { dispatch } from 'rxjs/internal/observable/pairs';

import FormComponent from '../../../components/FormComponent';
import { validEmail } from '../../../scripts/constants';
import { login } from '../actions';

function SignUpForm() {
  const textFiledChangeHandler = (e, index) => {
    const { value, name } = e.target;

    setSignUpForm((prev) => {
      const prevForm = [...prev];
      const currentTextField = prevForm[index];
      currentTextField.value = value;
      const getValidationError = currentTextField.getValidation(currentTextField.value);
      [currentTextField.errorMessage, currentTextField.isValid] = getValidationError;
      return prevForm;
    });
  };
  const [signUpForm, setSignUpForm] = useState([
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
      label: 'UserName',
      name: 'username',
      type: 'text',
      value: '',
      isValid: true,
      errorMessage: '',
      getValidation: (value) => {
        if (value.length < 3) {
          return ['Name should be gratter then 3', false];
        }
        if (value.length > 10) {
          return ['Name should be less then 10 letters', false];
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
      label: 'Contact No',
      name: 'contact',
      value: '',
      isValid: true,
      errorMessage: '',

      getValidation: (value) => {
        const abc = 11;
        if (value.length == abc) {
          return ['Invalid number', false];
        }
        return ['', true];
      },
    },
  ]);

  const signUpClickHandler = () => {
    dispatch(login({ email: 'asdsa@ads.com', password: 'asdas' }));
  };

  const signupButtons = {
    button: [
      {
        type: 'submit',
        name: 'SignUp',
        minWidth: '100%',
        clickHandler: signUpClickHandler,
      },
    ],
  };

  return (
    <div>
      <FormComponent
        basicButtons={signupButtons}
        changeHandler={textFiledChangeHandler}
        formTitle="Sign UP"
        inputFields={signUpForm}
        label="Login?"
        navigationPath="/login"
      />
    </div>
  );
}

export default SignUpForm;
