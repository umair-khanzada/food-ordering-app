import React, { useState, useEffect } from 'react';

import { Box, Grid } from '@material-ui/core';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import MainTab from '../../../components/CardMenus/Tabs';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import { GetHeader } from '../../../scripts/constants';
import { getCardData } from '../actions';
import { GetCategories, itemsByVendor } from '../request';
import { FirstTab } from './style';

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
  });

  useEffect(() => {
    setTabShow(true);
  }, [vendorId]);
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <Box>
            {isItemsFething && <Loader />}
            <FirstTab>{isTabshow && !isItemsFething && <MainTab category={category} />}</FirstTab>
            {!isTabshow && <NoDataFound text="No Vendor Seleted" />}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default ShowTab;
