import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { vendorList } from '../../../Mock/VendorList';
import { VendorTitleContainer, VendorTitle, DeleteIcon } from './style';
function VendorList() {
  const editDelete = (
    <>
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
  const header = ['Id', 'Name', 'Email', 'Contact', 'Timing', 'Building', 'Edit'];

  return (
    <div>
      <VendorTitleContainer>
        <VendorTitle>Vendors</VendorTitle>
        <CommonButton property="Add Vendor" />
      </VendorTitleContainer>

      <CustomTable editDelete={editDelete} header={header} rows={vendorList} tablewidth="80%" />
    </div>
  );
}

export default VendorList;
