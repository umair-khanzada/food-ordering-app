import { useTheme } from '@material-ui/core';
import React from 'react';
import StyledButton from './Style';

export default function CommonButton({ children, color }) {
  const theme = useTheme();

  // One option to get theme and supply it to styled compoenents
  return (
    <StyledButton color={color} theme={theme} variant="contained">
      {children}
    </StyledButton>
  );
}

CommonButton.defaulProps = {}; // All Components must have defualt props
CommonButton.prototype = {}; // All Components must have propTypes
