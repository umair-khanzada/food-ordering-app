import React from 'react';

import { CardContent, useTheme } from '@material-ui/core';

import StyledCard from './Style';

export default function OutlinedCard({ children, height, variant, maxwidth, minwidth }) {
  const theme = useTheme();

  // One option to get theme and supply it to styled compoenents
  return (
    <StyledCard
      height={height}
      maxwidth={maxwidth}
      minwidth={minwidth}
      theme={theme}
      variant={variant ? variant : 'outlined'}
    >
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
}
