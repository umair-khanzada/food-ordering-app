import React from 'react';

import CustomTable from '../../../components/CustomTable';
import { ordersHistoryList } from '../../../Mock/OrdersHistoryList';
import { OrdersHistoryTitleContainer, OrdersHistoryTitle } from './style';
function OrdersHistory() {
  const header = ['Id', 'Name', 'Contact', 'Items', 'Price', 'Date', 'Edit'];

  return (
    <>
      <OrdersHistoryTitleContainer>
        <OrdersHistoryTitle>Orders</OrdersHistoryTitle>
      </OrdersHistoryTitleContainer>

      <CustomTable header={header} rows={ordersHistoryList} tablewidth="90%" />
    </>
  );
}

export default OrdersHistory;
