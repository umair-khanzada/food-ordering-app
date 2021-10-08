import React from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CollapsibleTable from '../../../components/CollapsibleTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { deleteOrderById } from '../mutation';
import { FetchOrderHistory } from '../request';
import { OrdersListTitleContainer } from './Style';

const OrdersList = () => {
  const { data: ordersList, refetch: refetchOrders, isFetching } = FetchOrderHistory();

  const { mutateAsync, isLoading } = useMutation(deleteOrderById, {
    onSuccess: () => {
      refetchOrders();
    },
  });
  const history = useHistory();
  const { editOrderList } = RouteNames;
  const onEdit = (id) => {
    history.push({
      pathname: editOrderList,
      search: '?id=' + id,
    });
  };
  const onDelete = (id) => {
    mutateAsync(id);
  };

  const header = ['S.No', 'Name', 'Price', 'Total Items', 'status', 'edit'];
  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <OrdersListTitleContainer />
          <CollapsibleTable
            header={header}
            isDeleting={isLoading}
            isEditDelete
            onDelete={onDelete}
            onEdit={onEdit}
            rows={ordersList}
            tablewidth="90%"
          />
        </>
      )}
    </>
  );
};
export default OrdersList;
