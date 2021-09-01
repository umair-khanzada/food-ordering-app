import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';

export default function CommonButton() {
  // One option to get theme and supply it to styled compoenents
  const _theme = useTheme();
  return (
    <Button color="primary" variant="contained">
      Food Ordering app
    </Button>
  );
}

CommonButton.defaulProps = {}; // All Components must have defualt props
CommonButton.prototype = {}; // All Components must have propTypes
