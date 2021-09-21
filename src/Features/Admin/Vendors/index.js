import React from 'react';

import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { vendorList } from '../../../Mock/VendorList';
import RouteNames from '../../../routes/RouteNames';
import { VendorTitleContainer, VendorTitle } from './style';

function VendorList() {
  const history = useHistory();
  const { editVendor, addVendor } = RouteNames;

  const header = ['No', 'Name', 'Email', 'Contact', 'Timing', 'Building', 'Edit'];

  const onEdit = (row) => {
    history.push({
      pathname: editVendor,
      state: { data: row },
    });
  };

  const onDelete = (row) => {
    row;
  };

  return (
    <>
      <VendorTitleContainer>
        <VendorTitle>Vendors</VendorTitle>
        <CommonButton onClick={() => history.push(addVendor)} property="Add Vendor" />
      </VendorTitleContainer>

      <CustomTable
        header={header}
        isEditDelete
        onDelete={onDelete}
        onEdit={onEdit}
        padding="5px 11px"
        rows={vendorList}
        tablewidth="90%"
      />
    </>
  );
}

export default VendorList;
