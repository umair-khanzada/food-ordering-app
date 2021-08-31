import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { MaterialPalleteColours } from './Colors';
import { typography } from './Typography';
// eslint-disable-next-line import/order
import React from 'react';
import customShapes from './shapes';

const theme = createTheme({
  palette: MaterialPalleteColours,
  typography,
  shape: customShapes,
});

export default function MaterialThemeWrapper({ children }) {
  // we can use the light dark theme modal. If we need
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
