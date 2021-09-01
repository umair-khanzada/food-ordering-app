import { TextField } from '@material-ui/core';
import React from 'react';

const BasicInput = ({ type, minLength, changeHandler, value, label, varient }) => {
  return (
    <TextField
      label={label}
      minLength={minLength}
      onChange={(e) => changeHandler(e)}
      type={type}
      value={value}
      variant={varient}
    />
  );
};

export default BasicInput;
