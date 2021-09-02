import { blue, green, grey, purple, red, yellow } from '@material-ui/core/colors';

export const MaterialPalleteColours = {
  primary: {
    light: green[300],
    main: green[500],
    dark: green[900],
    contrastText: '#ffffff',
  },
  secondary: {
    light: blue[500],
    main: '#e91e63',
    dark: blue[900],
    contrastText: '#ffffff',
  },
  secondary1: {
    light: '#e91e63',
    main: '#e91e63',
    dark: '#e91e63',
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
    light: purple[500],
    main: purple[300],
    dark: purple[900],
  },
  success: {
    light: green[100],
    main: green[200],
    dark: green[300],
  },
  background: {
    // default: '#8FB9E3',
  },
  action: {
    hover: grey[200],
  },
};
