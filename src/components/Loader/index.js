import React from 'react';

import { Box, CircularProgress } from '@material-ui/core';

import { StyledLoaderGrid } from './style';

const Loader = () => {
  return (
    <StyledLoaderGrid alignItems="center" container>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    </StyledLoaderGrid>
  );
};

export default Loader;
