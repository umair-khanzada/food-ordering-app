import { withStyles } from '@material-ui/styles';

const GlobalStyles = withStyles((theme) => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      width: '100%',
      height: '100%',
    },
    body: {
      width: '100%',
      height: '100%',
    },
    '#root': {
      width: '100%',
      height: '100%',
    },
    a: { color: theme.palette.primary.main },
    img: { display: 'block', maxWidth: '100%' },
  },
}))(() => null);

export default GlobalStyles;
