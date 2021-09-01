import React, { Fragment } from 'react';

import { withTheme } from '@material-ui/core/styles';

import Drawer from './components/Drawer';
import ForgetPassword from './Pages/ForgetPassword';
function App() {
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
