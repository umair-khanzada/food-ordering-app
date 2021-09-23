import React from 'react';

import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

import Button from '../../components/Button/Button';

const Unauthorized = () => {
  const history = useHistory();

  return (
    <Grid alignItems="center" container direction="column" justifyContent="center" style={{ height: '100vh' }}>
      <Grid item>
        <Typography color="primary" variant="h1">
          401 Unauthorized :(
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={() => history.go(-1)} property="GO BACK" />
      </Grid>
    </Grid>
  );
};

export default Unauthorized;
