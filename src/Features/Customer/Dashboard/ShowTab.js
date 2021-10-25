import React, { useState, useEffect } from 'react';

import { Box, Grid } from '@material-ui/core';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import MainTab from '../../../components/CardMenus/Tabs';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import { ERROR, GetHeader } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { getCardData } from '../actions';
import { GetCategories, itemsByVendor } from '../request';

function ShowTab() {
  const { headers } = GetHeader();
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const vendorId = params.get('id');
  const [isTabshow, setTabShow] = useState(false);
  const dispatch = useDispatch();

  const { data: category } = GetCategories();

  const { isFetching: isItemsFething } = useQuery(['itemsByVendor', vendorId], () => itemsByVendor(headers, vendorId), {
    onSuccess: (data) => {
      dispatch(getCardData(data));
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
          status,
        },
      } = error;
      if (status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
  });

  useEffect(() => {}, [category]);
  useEffect(() => {
    if (category) {
      setTabShow(true);
    }
  }, [vendorId, category]);
  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <Box>
          {isItemsFething && <Loader />}
          <div>{isTabshow && !isItemsFething && <MainTab category={category} />}</div>
          {!isTabshow && <NoDataFound text="No Vendor Seleted" />}
        </Box>
      </Grid>
    </Grid>
  );
}
export default ShowTab;
