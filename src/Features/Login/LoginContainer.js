/* eslint-disable no-console */
import React, { useState } from 'react';
import FormComponent from '../../components/FormComponent';

function LoginContainer() {
  const [loginForm, setLoginForm] = useState({});
  const googleClickHandler = () => {
    // console.log('google');
  };
  const loginClickHandler = () => {
    console.log('loginForm');
    console.log(loginForm);
  };

  const textFiledChangeHandler = (e) => {
    const { value, name } = e.target;
    console.log('value', value);
    console.log('property', e.target.name);

    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const loginInputs = {
    fields: [
      {
        required: true,
        label: 'UserName',
        name: 'username',
        type: 'text',
        value: loginForm?.username || '',
        changeHandler: textFiledChangeHandler,
      },
      {
        required: true,
        label: 'Password',
        name: 'password',
        type: 'password',
        minlength: '6',
        value: loginForm?.password || '',
        changeHandler: textFiledChangeHandler,
      },
    ],
  };
  const loginButtons = {
    button: [
      {
        type: 'submit',
        name: 'login',
        minwidth: '100%',
        clickHandler: loginClickHandler,
      },
      {
        type: 'button',
        name: 'Google',
        minwidth: '50%',
        clickHandler: googleClickHandler,
      },
    ],
  };

  return (
    <div>
      <FormComponent
        forgotPassword="Forgot Password"
        formButtonType={loginButtons}
        formInputType={loginInputs}
        formProperty="Login"
      />
      {/* {loginFormObj.fields.map((field, i) => (
        <>
          <BasicInput key={i} label={field.label} name={field.name} type={field.type} value={field.value} />
          <br />
        </>
      ))} */}
    </div>
  );
}

export default LoginContainer;
