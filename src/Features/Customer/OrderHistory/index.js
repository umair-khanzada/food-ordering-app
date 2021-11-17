import React from 'react';

import { Box } from '@mui/system';

import CollapsibleTable from '../../../components/CollapsibleTable';
import Loader from '../../../components/Loader';
import { FetchOrderHistory } from '../request';

const OrdersList = () => {
  const { data: ordersList, isFetching } = FetchOrderHistory();

  const header = ['S.No', 'Vendor', 'Total Items', 'Price', 'Status'];
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <Box height="80vh" mt={5}>
          <CollapsibleTable header={header} isPagination rows={ordersList} />
        </Box>
      )}
    </>
  );
};
export default OrdersList;
