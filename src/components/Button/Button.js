import React from 'react';

import { useTheme } from '@material-ui/core';

import StyledButton from './Style';

export default function CommonButton({ clickHandler, required, type, property, color, maxwidth, minwidth }) {
  const theme = useTheme();

  // One option to get theme and supply it to styled compoenents
  return (
    <StyledButton
      color={color}
      maxwidth={maxwidth}
      minwidth={minwidth}
      onClick={clickHandler}
      required={required}
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
