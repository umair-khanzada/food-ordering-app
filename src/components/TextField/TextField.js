import React from 'react';

import { useTheme } from '@material-ui/core/styles';

import StyledTextField from './Style';

export default function BasicTextFields({ variant, width, type, label }) {
  const theme = useTheme();

  return (
    <form autoComplete="off" noValidate>
      <StyledTextField label={label} theme={theme} type={type} variant={variant} width={width} />
    </form>
  );
}
