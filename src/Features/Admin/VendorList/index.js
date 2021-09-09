import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { VendorTitleContainer, VendorTitle, DeleteIcon } from './style';
function VendorList() {
  const tableData = [
    {
      id: 1,
      name: 'Adnan',
      email: 'adnan@gmail.com',
      contact: '13131232',
      timing: '1:40',
      building: 'main',
    },
    {
      id: 2,
      name: 'Yousuf',
      email: 'Yousuf@gmail.com',
      contact: '13131232',
      timing: '1:40',
      building: 'main',
    },
    {
      id: 3,
      name: 'Baber',
      email: 'Baber@gamil.com',
      contact: '1309232',
      timing: '1:00',
      building: 'qasre sheeren',
    },
    {
      id: 4,
      name: 'Dilawer',
      email: 'Dilawer@gmail.com',
      contact: '23131232',
      timing: '1:50',
      building: 'qasre sheeren',
    },
    {
      id: 5,
      name: 'Naem',
      email: 'Naem@gmail.com',
      contact: '10901232',
      timing: '1:10',
      building: 'main',
    },
    {
      id: 6,
      name: 'Kashif',
      email: 'kashif@gamil.com',
      contact: '13131232',
      timing: '1:40',
      building: 'main',
    },
    {
      id: 7,
      name: 'Dilawer',
      email: 'Dilawer@gmail.com',
      timing: '1:10',
      building: 'main',
    },
  ];

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
    <>
      <VendorTitleContainer>
        <VendorTitle>Vendors</VendorTitle>
        <CommonButton property="Add Vendor" />
      </VendorTitleContainer>

      <CustomTable editDelete={editDelete} header={header} rows={tableData} />
    </>
  );
}

export default VendorList;
