import React from 'react';

import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { vendorList } from '../../../Mock/VendorList';
import { VendorTitleContainer, VendorTitle } from './style';
function VendorList() {
  const history = useHistory();

  const header = ['Id', 'Name', 'Email', 'Contact', 'Timing', 'Building', 'Edit'];

  const onEdit = (row) => {
    history.push({
      pathname: '/editvendor',
      state: { data: row },
    });
  };

  return (
    <>
      <VendorTitleContainer>
        <VendorTitle>Vendors</VendorTitle>
        <CommonButton onClick={() => history.push('/addvendor')} property="Add Vendor" />
      </VendorTitleContainer>

      <CustomTable header={header} isEditDelete onEdit={onEdit} rows={vendorList} tablewidth="100%" />
    </>
  );
}

export default VendorList;
