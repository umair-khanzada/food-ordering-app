import React from 'react';

import { MuiThemeProvider, useTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import StyledTextField from './Style';

export default function BasicTextFields({ variant, width, type, label }) {
  const theme = useTheme();

  return (
    <form autoComplete="off" noValidate>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <StyledTextField label={label} type={type} variant={variant} width={width} />
        </ThemeProvider>
      </MuiThemeProvider>
    </form>
  );
}
