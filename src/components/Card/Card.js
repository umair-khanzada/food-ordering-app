import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import { useTheme } from '@material-ui/core/styles';

import StyledCard from './Style';

export default function OutlinedCard({ children, minWidth, maxWidth }) {
  const theme = useTheme();

  // One option to get theme and supply it to styled compoenents
  return (
    <StyledCard maxwidth={maxWidth} minwidth={minWidth} theme={theme} variant="outlined">
      <CardContent maxwidth={maxWidth}>{children}</CardContent>
    </StyledCard>
  );
}
