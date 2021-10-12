import { green, grey, red, yellow } from '@material-ui/core/colors';

export const MaterialPalleteColours = {
  primary: {
    light: '#00B3E3',
    main: '#00B3E3',
    dark: '#00B3E3',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#717271',
    main: '#717271',
    dark: '#717271',
    contrastText: '#ffffff',
  },
  error: {
    light: red[300],
    main: red[500],
    dark: red[900],
  },
  warning: {
    light: yellow[300],
    main: yellow[500],
    dark: yellow[900],
  },
  info: {
    light: green[300],
    main: green[500],
    dark: green[900],
  },
  success: {
    light: green[100],
    main: green[200],
    dark: green[300],
  },
  background: {
    default: '#ffffff',
  },
  action: {
    hover: grey[200],
  },
};
