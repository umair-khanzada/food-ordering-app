import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { MaterialPalleteColours } from './Colors';

const theme = createTheme({
  palette: MaterialPalleteColours,
  typography: {
    fontFamily: [
      'Lato-Regular',
      'Lato-Black',
      'Lato-BlackItalic',
      'Lato-Bold',
      'Lato-BoldItalic',
      'Lato-Italic',
      'Lato-Light',
      'Lato-LightItalic',
      'Lato-Thin',
      'Lato-ThinItalic',
    ].join(','),
  },
});

export default function MaterialThemeWrapper({ children }) {
  // we can use the light dark theme modal. If we need
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
