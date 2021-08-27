import './App.css';
import { withTheme } from '@material-ui/core/styles';
import Button from './components/Button';
import TopNav from './components/TopNav';

function App(props) {
  return (
    <>
      <TopNav />
      <Button />
    </>  
  );
}

export default withTheme(App);
