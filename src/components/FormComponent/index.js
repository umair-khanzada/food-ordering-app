import React from 'react';

import { Grid } from '@material-ui/core';

import CommonButton from '../Button/Button';
import BasicTextFields from '../TextField/TextField';
import { FormHeading, ForgotPassword, Form, FormContainer } from './styles';

const FormComponent = ({ formInputType, formButtonType, formProperty, forgotPassword }) => {
  return (
    <FormContainer>
      <Grid alignItems="center" container justifyContent="center" style={{ padding: '0 20px' }}>
        <Grid item md={6} xs={12}>
          {/* alignItems="center" direction="column" justifyContent="center" style={{ minHeight: '100vh' }} */}
          {/* <OutlinedCard> */}
          <FormHeading>{formProperty}</FormHeading>
          <Form>
            {formInputType.fields.map(({ changeHandler, required, label, name, type, value }, i) => (
              <React.Fragment key={i}>
                {/* <BasicInput
            key={i}
            changeHandler={field.changeHandler}
            label={field.label}
            property={field.property}
            type={field.type}
            value={field.value}
          /> */}
                <div style={{ marginBottom: '30px' }}>
                  <BasicTextFields
                    key={i}
                    changeHandler={changeHandler}
                    label={label}
                    name={name}
                    required={required}
                    type={type}
                    value={value}
                    variant="outlined"
                    width="100%"
                  />
                </div>
              </React.Fragment>
            ))}

            {formButtonType.button.map((button, i) => (
              // <Button key={i} clickHandler={button.clickHandler} property={button.name} />

              <CommonButton
                key={i}
                clickHandler={button.clickHandler}
                minwidth={button.minwidth}
                property={button.name}
                type={button.type}
              />
            ))}

            <ForgotPassword href="/">{forgotPassword}</ForgotPassword>
          </Form>
          {/* </OutlinedCard> */}
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default FormComponent;
