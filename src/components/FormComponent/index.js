import React from 'react';

import CommonButton from '../Button/Button';
import BasicTextFields from '../TextField/TextField';
import {
  FormHeading,
  ForgotPassword,
  Form,
  FormContainer,
  InputBox,
  Label,
  BasicLink,
  Error,
  GridContainer,
  GridItem,
} from './styles';

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
      <GridContainer alignItems="center" container justifyContent="flex-end">
        <GridItem item md={4} xs={12}>
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
                <Error>{errorMessage}</Error>
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
        </GridItem>
      </GridContainer>
    </FormContainer>
  );
};

export default FormComponent;
