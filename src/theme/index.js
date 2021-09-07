import React from 'react';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { MaterialPalleteColours } from './Colors';
import customShapes from './shapes';
import { typography } from './Typography';

const theme = createTheme({
  palette: MaterialPalleteColours,
  typography,
  shape: customShapes,
  spacing: 8,
});

export default function MaterialThemeWrapper({ children }) {
  // we can use the light dark theme modal. If we need
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
