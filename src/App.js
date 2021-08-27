import './App.css';
import { withTheme } from '@material-ui/core/styles';
import Button from './components/Button';

function App(props) {
  console.log(props);
  return (
    <>
    <Button />
    </>  
  );
}

export default withTheme(App);
