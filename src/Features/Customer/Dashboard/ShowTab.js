import React, { useState, useEffect } from 'react';

import { Box, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import MainTab from '../../../components/CardMenus/Tabs';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import { getCardData } from '../actions';
import { GetCategories, GetItemsByVendor } from '../request';
import { FirstTab } from './style';
function ShowTab() {
  const history = useHistory();
  const params = new URLSearchParams(history.location.search);
  const vendorId = params.get('id');
  const [isTabshow, setTabShow] = useState(false);
  const dispatch = useDispatch();
  const { data: category } = GetCategories();
  const { data: items, isFetching: isItemsFething } = GetItemsByVendor(vendorId);

  useEffect(() => {
    setTabShow(true);
  }, [vendorId]);

  useEffect(() => {
    if (items) {
      dispatch(getCardData(items));
    }
  }, [items]);

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
