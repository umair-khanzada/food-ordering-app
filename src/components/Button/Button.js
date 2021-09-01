import React from 'react';

import { useTheme } from '@material-ui/core';

import StyledButton from './Style';

export default function CommonButton(props) {
  const theme = useTheme();
  const { children } = props;

  // One option to get theme and supply it to styled compoenents
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledButton {...props} theme={theme}>
      {children}
    </StyledButton>
  );
}

CommonButton.defaulProps = {}; // All Components must have defualt props
CommonButton.prototype = {}; // All Components must have propTypes
