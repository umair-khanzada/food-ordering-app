import React from 'react';

import { useTheme } from '@material-ui/core';

import StyledButton from './Style';

export default function CommonButton({
  className,
  onClick,
  type,
  property,
  color,
  maxwidth,
  minwidth,
  fontSize,
  style,
}) {
  const theme = useTheme();

  return (
    <StyledButton
      className={className}
      color={color}
      fontSize={fontSize}
      maxwidth={maxwidth}
      minwidth={minwidth}
      onClick={onClick}
      style={style}
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
