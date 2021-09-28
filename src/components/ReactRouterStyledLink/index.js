import React from 'react';

import { StyledIcon, StyledLink } from './style';

const ReactRouterStyledLink = ({ to, icon, label }) => {
  return (
    <StyledLink to={to}>
      <StyledIcon>{icon}</StyledIcon>
      {label}
    </StyledLink>
  );
};

export default ReactRouterStyledLink;
