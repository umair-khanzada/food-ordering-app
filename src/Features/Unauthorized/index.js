import React from 'react';

import { Grid, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

import Button from '../../components/Button/Button';

const Unauthorized = () => {
  const history = useHistory();

  return (
    <Box mt={30}>
      <Grid alignItems="center" container direction="column" justifyContent="center" spacing={3}>
        <Grid item>
          <Typography color="primary" variant="h1">
            401 Unauthorized :(
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              history.goBack();
            }}
            property="GO BACK"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Unauthorized;
