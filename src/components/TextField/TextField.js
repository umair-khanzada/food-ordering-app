import React from 'react';

import { useTheme } from '@material-ui/core/styles';

import StyledTextField from './Style';

export default function BasicTextFields({ label, type, variant, width, margin, onChange }) {
  const theme = useTheme();

  return (
    <StyledTextField
      label={label}
      margin={margin}
      onChange={onChange}
      theme={theme}
      type={type}
      variant={variant}
      width={width}
    />
  );
}
