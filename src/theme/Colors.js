import { green, grey, purple, red, yellow } from '@material-ui/core/colors';

export const MaterialPalleteColours = {
  primary: {
    light: green[300],
    main: green[500],
    dark: green[900],
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
    default: '#f0f0f0',
  },
  action: {
    hover: grey[200],
  },
};
