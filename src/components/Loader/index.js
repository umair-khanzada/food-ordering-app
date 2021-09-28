import * as React from 'react';

import { Box, CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    // <StyledLoaderGrid alignItems="center" container direction="column" justify="center">
    // </StyledLoaderGrid>
  );
};

export default Loader;
