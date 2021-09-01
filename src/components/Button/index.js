import React from 'react';

import { Button as MuiButton, Typography } from '@material-ui/core';

export default function Button(props) {
  // One option to get theme and supply it to styled compoenents
  return (
    <MuiButton color="primary" variant="contained">
      <Typography variant="button">Order Food</Typography>
    </MuiButton>
  );
}

Button.defaulProps = {}; // All Components must have defualt props
Button.prototype = {}; // All Components must have propTypes
