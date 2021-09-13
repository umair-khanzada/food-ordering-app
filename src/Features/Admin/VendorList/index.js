import React from 'react';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { vendorList } from '../../../Mock/VendorList';
import { VendorTitleContainer, VendorTitle } from './style';

function VendorList() {
  const header = ['Id', 'Name', 'Email', 'Contact', 'Timing', 'Building', 'Edit'];

  return (
    <div>
      <VendorTitleContainer>
        <VendorTitle>Vendors</VendorTitle>
        <CommonButton property="Add Vendor" />
      </VendorTitleContainer>

      <CustomTable header={header} rows={vendorList} tablewidth="90%" />
    </div>
  );
}

export default VendorList;
