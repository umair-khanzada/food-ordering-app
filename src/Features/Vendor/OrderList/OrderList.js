import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import CollapsibleTable from '../../../components/CollapsibleTable';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import NoDataFound from '../../../components/NoDataFilter';
import { ERROR, SUCCESS } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { InsertBalance, updateOrderById } from '../mutation';
import { FetchOrderHistory } from '../request';
import { GetBalanceByUserId } from './request';
import { CollapseTableContainer, SummaryHeader } from './Style';

const OrdersList = () => {
  const { data: ordersList, refetch: refetchOrders, isFetching } = FetchOrderHistory();
  const [fetchBalance, setFetchBalance] = useState(false);
  const [userId, setUserId] = useState(0);
  const [orderAmount, setOrderAmount] = useState(0);
  const [isUpdateOrder, setIsUpdateOrder] = useState(false);
  const vendor_Id = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const dispatch = useDispatch();
  const { mutateAsync, isLoading } = useMutation(updateOrderById, {
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      if (error.response.status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
    onSuccess: () => {
      refetchOrders();
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: 'Successfull order has been updated',
          messageType: SUCCESS,
        }),
      );
    },
  });
  const history = useHistory();
  const onReject = ({ id, status, price }) => {
    if (status !== 'recieved' || status !== 'rejected') {
      const updatedOrder = {
        status: 'rejected',
        amount: price,
      };
      mutateAsync({ id, updatedOrder });
    }
  };

  const [itemSummary, setItemSummary] = useState([]);
  useEffect(() => {
    const itemQuantity = {};
    const itemSummary = [];
    if (ordersList) {
      ordersList.map(({ items, status }) => {
        items.map(({ name, quantity }) => {
          if (status === 'received') {
            itemQuantity[name] = quantity + (itemQuantity[name] || 0);
          }
        });
      });
      for (const key in itemQuantity) {
        itemSummary.push({
          name: key,
          quantity: itemQuantity[key],
        });
      }

      setItemSummary(itemSummary);
    }
  }, [ordersList]);
  const { data: balance, refetch } = GetBalanceByUserId(userId, isUpdateOrder);

  const { mutate: addBalanceMutate } = useMutation(InsertBalance, {
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      const {
        response: {
          data: { message },
        },
      } = error;
      if (error.response.status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
  });
  useEffect(() => {
    if (balance && fetchBalance) {
      setUserBalance(orderAmount);
      setFetchBalance(false);
    }
  }, [balance, fetchBalance]);
  const onEdit = ({ id, status, price, user_id }) => {
    setIsUpdateOrder(true);
    setOrderAmount(price);
    setUserId(user_id);
    const updatedOrder = {
      status: 'received',
      amount: price,
    };

    setFetchBalance(true);
    mutateAsync({ id, updatedOrder });
  };
  const setUserBalance = (orderAmount) => {
    if (balance) {
      let previousBalance = 0;
      balance.map(({ vendorId: { id }, amount }) => {
        if (id === vendor_Id) {
          previousBalance = amount;
        }
      });

      const currentBalance = previousBalance - orderAmount;

      const totalBalance = {
        userId,
        vendorId: vendor_Id,
        amount: currentBalance,
      };

      addBalanceMutate(totalBalance);
    }
  };
  const header = ['S.No', 'Name', 'Total Items', 'Price', 'status', 'edit'];
  const itemSummaryHeader = ['S.No', 'itemName', 'total'];

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {ordersList.length !== 0 ? (
            <CollapseTableContainer>
              <CollapsibleTable
                header={header}
                isDeleting={isLoading}
                isEditDelete
                onEdit={onEdit}
                onReject={onReject}
                rows={ordersList}
                tablewidth="90%"
              />
              {itemSummary.length !== 0 && (
                <Box height="80vh" mt={4}>
                  <SummaryHeader>Items Summary</SummaryHeader>
                  <CustomTable cellWidth="30%" header={itemSummaryHeader} rows={itemSummary} tablewidth="80%" />
                </Box>
              )}
            </CollapseTableContainer>
          ) : (
            <NoDataFound text="There is no order" />
          )}
        </>
      )}
    </>
  );
};
export default OrdersList;
