import React from 'react';

import { useMutation } from 'react-query';

import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import { GetHeader } from '../../../scripts/constants';
import { deleteOrderById } from '../mutation';
import { FetchOrderHistory } from '../request';
import { OrdersListTitleContainer } from './Style';

const OrdersList = () => {
  const { headers } = GetHeader();
  const { data: ordersList, refetch: refetchOrders, isFetching } = FetchOrderHistory();

  const { mutateAsync, isLoading } = useMutation(deleteOrderById, {
    onSuccess: () => {
      console.log('success');
      refetchOrders();
    },
    onError: () => {
      console.log('error');
    },
  });
  const onDelete = ({ id }) => {
    console.log('row', id);
    mutateAsync({ id, headers });
  };
  const header = ['No', 'Name', 'Contact', 'Items', 'Price', 'Date', 'edit'];
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <OrdersListTitleContainer />
          <CustomTable
            header={header}
            isDeleting={isLoading}
            isEditDelete
            onDelete={onDelete}
            rows={ordersList}
            tablewidth="80%"
          />
        </>
      )}
    </>
  );
};
export default OrdersList;
