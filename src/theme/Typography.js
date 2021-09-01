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
    [theme.breakpoints.down('md')]: {
      // use .between functions for different screen ranges
      fontSize: '2rem',
    },
  },
  h2: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.between('xl', 'lg')]: {
      // use .between functions for different screen ranges
      fontSize: '2.2rem',
    },
    [theme.breakpoints.down('md')]: {
      // use .between functions for different screen ranges
      fontSize: '1.5rem',
    },
  },
  h3: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.4rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.between('xl', 'lg')]: {
      // use .between functions for different screen ranges
      fontSize: '1.7rem',
    },
    [theme.breakpoints.down('md')]: {
      // use .between functions for different screen ranges
      fontSize: '1.0rem',
    },
  },
  h4: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.0rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.between('xl', 'lg')]: {
      // use .between functions for different screen ranges
      fontSize: '1.4rem',
    },
    [theme.breakpoints.down('md')]: {
      // use .between functions for different screen ranges
      fontSize: '0.96rem',
    },
  },
  h5: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.96rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.92rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.between('xl', 'lg')]: {
      // use .between functions for different screen ranges
      fontSize: '1.0rem',
    },
    [theme.breakpoints.down('md')]: {
      // use .between functions for different screen ranges
      fontSize: '0.90rem',
    },
  },
  h6: {
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.82rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.86rem', // use font size for different breakpoints here
    },
    [theme.breakpoints.between('xl', 'lg')]: {
      // use .between functions for different screen ranges
      fontSize: '0.90rem',
    },
    [theme.breakpoints.down('md')]: {
      // use .between functions for different screen ranges
      fontSize: '0.80rem',
    },
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
    textTransform: 'capitalize',
    // extend style if you need
  },
  caption: {
    fontsize: '1.5rem',
    fontStyle: 'bold',
  },
  overline: {
    fontSize: '2rem',
  },
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
};
