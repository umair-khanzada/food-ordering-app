import React from 'react';
import BasicInput from '../BasicInput';
import Button from '../Button/index';

const FormComponent = ({ formInputType, formButtonType }) => {
  return (
    <>
      {formInputType.fields.map((field, i) => (
        <>
          <BasicInput
            key={i}
            changeHandler={field.changeHandler}
            label={field.label}
            property={field.property}
            type={field.type}
            value={field.value}
          />
          <br />
        </>
      ))}
      {formButtonType.button.map((button, i) => (
        <Button key={i} clickHandler={button.clickHandler} property={button.name} />
      ))}
    </>
  );
};

export default FormComponent;
