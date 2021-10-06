import React from 'react';

import { Box } from '@mui/system';

import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import { FetchOrderHistory } from '../request';

const OrdersList = () => {
  const { data: ordersList, isFetching } = FetchOrderHistory();
  const header = ['S.No', 'Vendor', 'Items', 'status', 'Price'];
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <Box mt={8}>
          <CustomTable header={header} rows={ordersList} tablewidth="90%" />
        </Box>
      )}
    </>
  );
};
export default OrdersList;
