import React from 'react';

import { useTheme } from '@material-ui/core/styles';

import StyledTextField from './Style';

export default function BasicTextFields({
  variant,
  error,
  width,
  type,
  label,
  value,
  changeHandler,
  minLength,
  name,
  required,
}) {
  const theme = useTheme();
  return (
    <StyledTextField
      error={error}
      label={label}
      minLength={minLength}
      name={name}
      onChange={changeHandler}
      required={required}
      theme={theme}
      type={type}
      value={value}
      variant={variant ? variant : 'outlined'}
      width={width}
    />
  );
}
