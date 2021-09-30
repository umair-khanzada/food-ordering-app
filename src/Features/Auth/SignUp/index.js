import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import FormComponent from '../../../components/FormComponent';
import { emailRegex, contactRegex } from '../../../scripts/constants';
import { setFormMessage, signup } from '../actions';

function SignUpForm() {
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

  const validateOnSubmit = () => {
    let isValid = true;
    const ValidateArray = signUpForm.map((textField) => {
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

    setSignUpForm(ValidateArray);

    return isValid;
  };

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
      name: 'name',
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
        if (!contactRegex.test(value)) {
          return ['Invalid number', false];
        }
        return ['', true];
      },
    },
  ]);

  const signUpClickHandler = (e) => {
    e.preventDefault();

    if (validateOnSubmit()) {
      const userData = {};
      signUpForm.map(({ name, value }) => {
        userData[name] = value;
      });

      dispatch(signup(userData));
    }
  };

  const signupButtons = {
    button: [
      {
        type: 'button',
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
        responseError={message}
      />
    </div>
  );
}

export default SignUpForm;
