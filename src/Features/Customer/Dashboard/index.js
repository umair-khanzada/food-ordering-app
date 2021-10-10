import React from 'react';

import { Box, Grid } from '@material-ui/core';
import { PersonRounded } from '@material-ui/icons';
import { useHistory } from 'react-router';

import Snackbar from '../../../components/AlertMessage';
import RouteNames from '../../../routes/RouteNames';
import { FetchVendors } from '../request';
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
              <vendorCard style={{ display: 'flex' }}>
                {vendors.map(({ name, id }) => {
                  return (
                    <div
                      key={id}
                      onClick={() => showVendor(id)}
                      style={{
                        display: 'flex',
                        padding: '10px',
                        textAlign: 'center',
                        boxShadow: '0 0 10px rgb(0 0 0 / 20%)',
                        margin: '20px',
                        height: '278px',
                        width: '217px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}
                    >
                      <div style={{ borderRadius: '50%', boxShadow: '0 0 10px rgb(0 0 0 / 20%)' }}>
                        <PersonRounded style={{ fontSize: '49px' }} />
                      </div>
                      <h1>{name}</h1>
                    </div>
                  );
                })}
              </vendorCard>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
