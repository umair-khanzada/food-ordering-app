import { green, grey, red, yellow } from '@material-ui/core/colors';

export const MaterialPalleteColours = {
  primary: {
    light: '#e91e63',
    main: '#e91e63',
    dark: '#e91e63',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#3385ff',
    main: '#3385ff',
    dark: '#3385ff',
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
    default: '#f0f0f0',
  },
  action: {
    hover: grey[200],
  },
};
