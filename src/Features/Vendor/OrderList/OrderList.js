import React from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { GetHeader } from '../../../scripts/constants';
import { deleteOrderById } from '../mutation';
import { FetchOrderHistory } from '../request';
import { OrdersListTitleContainer } from './Style';

const OrdersList = () => {
  const { headers } = GetHeader();
  const { data: ordersList, refetch: refetchOrders, isFetching } = FetchOrderHistory();

  const { mutateAsync, isLoading } = useMutation(deleteOrderById, {
    onSuccess: () => {
      refetchOrders();
    },
  });
  const history = useHistory();
  const { editOrderList } = RouteNames;
  const onEdit = ({ id }) => {
    history.push({
      pathname: editOrderList,
      search: '?id' + id,
    });
  };
  const onDelete = ({ id }) => {
    mutateAsync({ id, headers });
  };
  const header = ['S.No', 'Name', 'Items', 'status', 'Price', 'edit'];
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
