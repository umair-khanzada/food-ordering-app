import React from 'react';

import { useHistory } from 'react-router';

import CustomTable from '../../../components/CustomTable';
import { ordersHistoryList } from '../../../Mock/OrdersHistoryList';
import { OrdersHistoryTitleContainer, OrdersHistoryTitle } from './style';
function OrdersHistory() {
  const history = useHistory();

  const onEdit = (row) => {
    history.push({
      pathname: '/editorderhistory',
      state: { data: row },
    });
  };

  const header = ['Id', 'Name', 'Contact', 'Items', 'Price', 'Date', 'Edit'];

  return (
    <>
      <OrdersHistoryTitleContainer>
        <OrdersHistoryTitle>Orders</OrdersHistoryTitle>
      </OrdersHistoryTitleContainer>

      <CustomTable header={header} isEditDelete onEdit={onEdit} rows={ordersHistoryList} tablewidth="80%" />
    </>
  );
}

export default OrdersHistory;
