import React from 'react';

import { useTheme } from '@material-ui/core';

import StyledButton from './Style';

export default function CommonButton({ onClick, type, property, color, maxwidth, minwidth }) {
  const theme = useTheme();
  return (
    <StyledButton
      color={color}
      maxwidth={maxwidth}
      minwidth={minwidth}
      onClick={onClick}
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
