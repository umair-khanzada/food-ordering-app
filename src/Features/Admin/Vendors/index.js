import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { fetchVendors } from './actions';
import { VendorTitleContainer, VendorTitle } from './style';

function VendorList() {
  const history = useHistory();
  const { editVendor, addVendor } = RouteNames;

  const onEdit = (row) => {
    history.push({
      pathname: editVendor,
      state: { data: row },
    });
  };

  const onDelete = (row) => {
    row;
  };

  const [vendors, setVendors] = useState([]);

  const getVendorsResponseFromEpic = (response) => {
    setVendors(response);
  };

  const [header, setHeader] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendors(getVendorsResponseFromEpic));
  }, []);

  useEffect(() => {
    if (vendors.length > 0) {
      console.log(vendors);
      setHeader([...Object.keys(vendors[0]), 'Edit']);
    }
  }, [vendors]);

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
