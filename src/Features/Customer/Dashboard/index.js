import React from 'react';

import { Box, Grid } from '@material-ui/core';
import { PersonRounded } from '@material-ui/icons';
import { useHistory } from 'react-router';

import Snackbar from '../../../components/AlertMessage';
import RouteNames from '../../../routes/RouteNames';
import { FetchVendors } from '../request';
import { VendorCard, VendorCardItem } from './style';
function Dashboard() {
  const { showTabScreen } = RouteNames;
  const history = useHistory();

  const { data: vendors, isFetching: isVendorFetching } = FetchVendors('vendor');

  const showVendor = (vendorId) => {
    history.push({
      pathname: showTabScreen,
      search: `?id=${vendorId}`,
    });
  };
  return (
    <div>
      <Snackbar />
      <Grid container>
        <Grid item md={12}>
          <Box>
            {vendors && (
              <VendorCard>
                {vendors.map(({ name, id }) => {
                  return (
                    <VendorCardItem key={id} onClick={() => showVendor(id)}>
                      <div style={{ borderRadius: '50%', boxShadow: '0 0 10px rgb(0 0 0 / 20%)', padding: '4px' }}>
                        <PersonRounded style={{ fontSize: '87px' }} />
                      </div>
                      <h1>{name}</h1>
                    </VendorCardItem>
                  );
                })}
              </VendorCard>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
