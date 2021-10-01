import React from 'react';

import { Box, CircularProgress } from '@material-ui/core';

import { StyledLoaderGrid } from './style';

const Loader = () => {
  return (
    <StyledLoaderGrid alignItems="center" container direction="column" justify="center">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </StyledLoaderGrid>
  );
};

export default Loader;
