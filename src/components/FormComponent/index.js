import React from 'react';

import { Grid } from '@material-ui/core';

import CommonButton from '../Button/Button';
import BasicTextFields from '../TextField/TextField';
import { FormHeading, ForgotPassword, Form, FormContainer, InputBox, Label, BasicLink } from './styles';

const FormComponent = ({ inputFields, basicButtons, formTitle, forgotPassword, label, navigationPath }) => {
  return (
    <FormContainer>
      <Grid alignItems="center" container justifyContent="center" style={{ padding: '0 5px', height: '100vh' }}>
        <Grid item md={4} xs={12}>
          <Form>
            <FormHeading>{formTitle}</FormHeading>
            {inputFields.fields.map(({ changeHandler, required, label, name, type, value }, i) => (
              <InputBox key={name + '-' + i} className="inputFields">
                <BasicTextFields
                  key={name + '-' + i}
                  changeHandler={changeHandler}
                  label={label}
                  name={name}
                  required={required}
                  type={type}
                  value={value}
                  variant="outlined"
                  width="100%"
                />
              </InputBox>
            ))}
            {basicButtons.button.map(({ clickHandler, minWidth, name, type }, i) => (
              <div key={name + '-' + i}>
                <CommonButton
                  key={name + '-' + i}
                  clickHandler={clickHandler}
                  minWidth={minWidth}
                  property={name}
                  type={type}
                />
              </div>
            ))}
            <BasicLink>
              <Label to={navigationPath}>{label}</Label>

              <ForgotPassword to="/login">{forgotPassword}</ForgotPassword>
            </BasicLink>
          </Form>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default FormComponent;
