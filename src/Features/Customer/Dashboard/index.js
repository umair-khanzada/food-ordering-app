import React from 'react';

import { Box, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

import RouteNames from '../../../routes/RouteNames';
import { FetchVendors } from '../request';
import { DetailsVendor, ImageContainer, VendorCard, VendorCardItem } from './style';
function Dashboard() {
  const { showTabScreen } = RouteNames;
  const history = useHistory();

  const { data: vendors } = FetchVendors('vendor');

  const showVendor = (vendorId) => {
    history.push({
      pathname: showTabScreen,
      search: `?id=${vendorId}`,
    });
  };
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <Box>
            {vendors && (
              <VendorCard>
                {vendors.map(({ name, id, contact }) => {
                  return (
                    <VendorCardItem key={id} onClick={() => showVendor(id)}>
                      <ImageContainer>
                        <img
                          alt="profile"
                          src="https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png"
                          width="100%"
                        />
                      </ImageContainer>

                      <DetailsVendor>
                        <h2>{name}</h2>
                        <p>{contact}</p>
                      </DetailsVendor>
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
