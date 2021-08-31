import { withTheme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import Drawer from './components/Drawer';
import ForgetPassword from './Pages/ForgetPassword';
function App(props) {
  return (
    <>
      <Drawer>
        {/* <Button /> */}
        <ForgetPassword />
      </Drawer>
    </>
  );
}
export default withTheme(App);
