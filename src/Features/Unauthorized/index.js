import React from 'react';

import { Grid, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Button from '../../components/Button/Button';
import { defaultRouteForRoles } from '../../scripts/constants';

const Unauthorized = () => {
  const role = useSelector((state) => {
    const {
      authReducer: { role },
    } = state;
    return role;
  });

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
              const defaultRouteAfterLogin = defaultRouteForRoles[role];
              history.push(defaultRouteAfterLogin || '/');
            }}
            property="Go To Default Route"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Unauthorized;
