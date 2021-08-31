// You can use the h1, h2 style py providing the variant props to themeProvider
import { createTheme } from '@material-ui/core/styles';

// If you are using your custom breakpoints use custom breakpoints object instead
const theme = createTheme();

export const typography = {
  h1: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.4rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.between('xl', 'lg')]: {
      // use .between functions for different screen ranges
      fontSize: '3rem',
    },
  },
  h2: {
    fontSize: '1.8rem',
    // Todo --> implement breakpoints responsive UI if you need
  },
  h3: {
    fontSize: '1.6rem', // 32
    // Todo --> implement breakpoints responsive UI if you need
  },
  h4: {
    fontsize: '1.4rem',
    // Todo --> implement breakpoints responsive UI if you need
  },
  h5: {
    fontsize: '1.2rem',
    // Todo --> implement breakpoints responsive UI if you need
  },
  h6: {
    fontsize: '1rem',
    // Todo --> implement breakpoints responsive UI if you need
  },
  subtitle1: {
    fontsize: '0.8rem',
  },
  subtitle2: {
    fontsize: '0.6rem',
  },
  body1: {
    fontsize: '1rem',
  },
  body2: {
    fontsize: '1.5rem',
  },
  button: {
    fontsize: '0.5rem',
    fontWeight: 'bold',
    // extend style if you need
  },
  caption: {
    fontsize: '1.5rem',
    fontStyle: 'bold',
  },
  overline: {
    fontSize: '2rem',
  },
};
