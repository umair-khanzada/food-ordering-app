import React from 'react';

import { Box, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

import profile from '../../../assets/person-logo-icon-png-svg.png';
import Snackbar from '../../../components/AlertMessage';
import RouteNames from '../../../routes/RouteNames';
import { FetchVendors } from '../request';
import { VendorCard, VendorCardItem, VendorImage } from './style';
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
                      <VendorImage alt="vendor" src={profile} />

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
