import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';

import CustomTable from '../../../components/CustomTable';
import { OrderHistoryList } from '../../../Mock/OrderHistory';
import { VendorTitleContainer, VendorTitle, DeleteIcon } from './style';

function OrderHistory() {
  const editDelete = (
    <>
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
  const header = ['Id', 'Name', 'Contact', 'Edit'];

  return (
    <>
      <VendorTitleContainer>
        <VendorTitle>Orders</VendorTitle>
      </VendorTitleContainer>

      <CustomTable editDelete={editDelete} header={header} rows={OrderHistoryList} />
    </>
  );
}

export default OrderHistory;
