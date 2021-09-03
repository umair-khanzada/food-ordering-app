import React from 'react';

import { useTheme } from '@material-ui/core';

import StyledButton from './Style';

export default function CommonButton({ onClick, color, children, variant }) {
  const theme = useTheme();

  return (
    <StyledButton color={color} onClick={onClick} theme={theme} variant={variant}>
      {children}
    </StyledButton>
  );
}

CommonButton.defaulProps = {}; // All Components must have defualt props
CommonButton.prototype = {}; // All Components must have propTypes
