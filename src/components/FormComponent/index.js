import React from 'react';

import { Grid } from '@material-ui/core';

import CommonButton from '../Button/Button';
import BasicTextFields from '../TextField/TextField';
import { FormHeading, ForgotPassword, Form, FormContainer, InputBox, Label, BasicLink, Error } from './styles';

const FormComponent = ({
  inputFields,
  basicButtons,
  formTitle,
  forgotPassword,
  label,
  navigationPath,
  changeHandler,
  responseError,
}) => {
  return (
    <FormContainer>
      <Grid
        alignItems="center"
        container
        justifyContent="center"
        style={{ padding: '0 5px', height: '100vh', boxShadow: '0 0 10px lightgrey' }}
      >
        {/* <Grid item md={4}>
          <div style={{ position: 'relative', height: '368px' }}>
            <img alt="logo" src={foodImage} style={{ width: '100%', height: '100%' }} />
            <div
              style={{
                position: 'absolute',
                top: '0',
                width: '100%',
                height: '100%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                zIndex: '2',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                color: 'white',
                fontSize: '43px',
              }}
            >
              Welcome To Nisum Foods
            </div>
          </div>
        </Grid> */}
        <Grid item md={4} xs={12}>
          <Form>
            <FormHeading>{formTitle}</FormHeading>
            {inputFields.map(({ required, label, name, type, value, errorMessage }, i) => (
              <InputBox key={name + '-' + i} className="inputFields">
                <BasicTextFields
                  key={name + '-' + i}
                  changeHandler={(e) => changeHandler(e, i)}
                  label={label}
                  name={name}
                  required={required}
                  type={type}
                  value={value}
                  variant="outlined"
                  width="100%"
                />
                <Error style={{ justifyContent: 'top' }}>{errorMessage}</Error>
              </InputBox>
            ))}
            {basicButtons.button.map(({ clickHandler, minWidth, name, type }, i) => (
              <div key={name + '-' + i}>
                <CommonButton
                  key={name + '-' + i}
                  fontSize="16px"
                  minwidth={minWidth}
                  onClick={clickHandler}
                  property={name}
                  type={type}
                />
              </div>
            ))}
            <BasicLink>
              <Label to={navigationPath}>{label}</Label>

              <ForgotPassword to="/forget-password">{forgotPassword}</ForgotPassword>
            </BasicLink>
            <Error>{responseError}</Error>
          </Form>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default FormComponent;
