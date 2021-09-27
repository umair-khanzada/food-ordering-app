import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { deleteVendorById, fetchVendors } from './actions';
import { VendorTitleContainer, VendorTitle } from './style';

function VendorList() {
  const dispatch = useDispatch();
  const [vendors, setVendors] = useState('');
  const header = ['S.No', 'name', 'email', 'Edit'];

  const removeElements = ['role', 'password', 'isEmailVerified'];

  const getVendors = (response) => {
    setVendors(response);
  };

  useEffect(() => {
    dispatch(fetchVendors(getVendors));
  }, []);

  useEffect(() => {
    if (vendors) {
      vendors.map((vendor) => {
        removeElements.map((removeElement) => delete vendor[removeElement]);
      });
    }
  }, [vendors]);
  const history = useHistory();
  const { editVendor, addVendor } = RouteNames;

  const onEdit = ({ id }) => {
    history.push({
      pathname: editVendor,
      search: '?id=' + id,
    });
  };

  const onDelete = ({ id }) => {
    dispatch(deleteVendorById(id));
  };

  return (
    <>
      <VendorTitleContainer>
        <VendorTitle>Vendors</VendorTitle>
        <CommonButton onClick={() => history.push(addVendor)} property="Add Vendor" />
      </VendorTitleContainer>

      <CustomTable header={header} isEditDelete onDelete={onDelete} onEdit={onEdit} rows={vendors} tablewidth="90%" />
    </>
  );
}

export default VendorList;
