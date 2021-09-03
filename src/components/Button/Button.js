import React from 'react';

import { useTheme } from '@material-ui/core';

import StyledButton from './Style';

export default function CommonButton({ onCLick, type, property, color, maxWidth, minWidth }) {
  const theme = useTheme();

  return (
    <StyledButton
      color={color}
      maxwidth={maxWidth}
      minwidth={minWidth}
      onClick={onCLick}
      theme={theme}
      type={type}
      variant="contained"
    >
      {property}
    </StyledButton>
  );
}

CommonButton.defaulProps = {}; // All Components must have defualt props
CommonButton.prototype = {}; // All Components must have propTypes
