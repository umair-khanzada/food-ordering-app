import React, { useState } from 'react';

import FormComponent from '../../../components/FormComponent';
import { emailRegex } from '../../../scripts/constants';

function SignUpForm() {
  const textFiledChangeHandler = (e, index) => {
    const { value } = e.target;

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
        if (!emailRegex.test(value)) {
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
          return ['Password must be 8 characters long', false];
        }
        return ['', true];
      },
    },
    {
      required: true,
      label: 'Contact No',
      name: 'contact',
      value: '',
      type: 'tel',
      isValid: true,
      errorMessage: '',

      getValidation: (value) => {
        if (value.length < 11) {
          return ['Invalid number', false];
        }
        return ['', true];
      },
    },
  ]);

  const signUpClickHandler = (e) => {
    e.preventDefault();

    let isValid = true;
    signUpForm.map((textField) => {
      if (textField.value == '') {
        setSignUpForm((prev) => {
          textField.errorMessage = textField.name + ' field cannot be empty';
          textField.isValid = false;
          return [...prev];
        });
      }

      !isValid ? null : (isValid = textField.isValid);
    });

    if (isValid) {
      const userData = {};
      signUpForm.map(({ name, value }) => {
        userData[name] = value;
      });
    }
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
