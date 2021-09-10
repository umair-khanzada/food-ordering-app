import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';

import CustomTable from '../../../components/CustomTable';
import { ordersHistoryList } from '../../../Mock/OrdersHistoryList';
import { OrdersHistoryTitleContainer, DeleteIcon, OrdersHistoryTitle } from './style';
function OrdersHistory() {
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
  const header = ['Id', 'Name', 'Contact', 'Items', 'Price', 'Edit'];

  return (
    <>
      <OrdersHistoryTitleContainer>
        <OrdersHistoryTitle>Orders</OrdersHistoryTitle>
      </OrdersHistoryTitleContainer>

      <CustomTable editDelete={editDelete} header={header} rows={ordersHistoryList} tablewidth="80%" />
    </>
  );
}

export default OrdersHistory;
