import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { ERROR, GetHeader } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { deleteUserById } from '../Common Requests/mutation';
import { FetchUsers } from '../Common Requests/request';
import { VendorTitleContainer, VendorTitle } from './style';
function VendorList() {
  const { headers } = GetHeader();

  const [vendors, setVendors] = useState('');
  const header = ['S.No', 'name', 'email', 'contact', 'Edit'];
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: vendorsData, isFetching, refetch: refetchVendor } = FetchUsers('vendor');
  const Deletevendor = useMutation(deleteUserById, {
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
      refetchVendor();
    },
  });
  useEffect(() => {
    if (Array.isArray(vendorsData)) {
      vendorsData.map((user) => {
        const removeElements = ['password', 'isEmailVerified'];

        removeElements.map((removeElement) => delete user[removeElement]);
      });
      setVendors(vendorsData);
    }
  }, [vendorsData]);
  const { editVendor, addVendor } = RouteNames;

  const onEdit = ({ id }) => {
    history.push({
      pathname: editVendor,
      search: '?id=' + id,
    });
  };

  const onDelete = ({ id }) => {
    Deletevendor.mutateAsync({ id, headers });
  };

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <VendorTitleContainer>
            <VendorTitle>Vendors</VendorTitle>
            <CommonButton onClick={() => history.push(addVendor)} property="Add Vendor" />
          </VendorTitleContainer>

          <CustomTable
            header={header}
            isDeleting={Deletevendor.isLoading}
            isEditDelete
            onDelete={onDelete}
            onEdit={onEdit}
            rows={vendors}
            tablewidth="90%"
          />
        </>
      )}
    </>
  );
}

export default VendorList;
