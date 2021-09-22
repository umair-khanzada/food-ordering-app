import React, { useState, useEffect } from 'react';

import { Collapse } from '@material-ui/core';
import { useSelector } from 'react-redux';

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
  NavTitle,
  NisumText,
  NisumTextColor,
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
  const message = useSelector((state) => {
    console.log('state message', state.responseMessage.message);
    return state.responseMessage.message;
  });
  console.log('message', message);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <>
      <NavTitle elevation={0}>
        <NisumText>
          Ni<NisumTextColor>sum</NisumTextColor>
        </NisumText>
      </NavTitle>
      <FormContainer>
        <GridContainer>
          <GridItem>
            <Collapse in={checked} timeout={1000}>
              <Form elevation={10}>
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
            </Collapse>
          </GridItem>
        </GridContainer>
      </FormContainer>
    </>
  );
};

export default FormComponent;
