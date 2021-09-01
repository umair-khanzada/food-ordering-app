import { useTheme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import StyledCard from './Style';

export default function OutlinedCard({ children, minWidth, maxWidth }) {
  const theme = useTheme();

  // One option to get theme and supply it to styled compoenents
  return (
    <StyledCard maxWidth={maxWidth} minWidth={minWidth} variant="outlined">
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
}
