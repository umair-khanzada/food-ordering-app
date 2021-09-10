import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';

import CustomTable from '../../../components/CustomTable';
import { VendorTitleContainer, VendorTitle, DeleteIcon } from './style';

function OrderHistory() {
  const tableData = [
    {
      id: 1,
      name: 'Adnan',
      contact: '13131232',
    },
    {
      id: 2,
      name: 'Yousuf',

      contact: '13131232',
    },
    {
      id: 3,
      name: 'Baber',
      contact: '1309232',
    },
    {
      id: 4,
      name: 'Dilawer',
      contact: '23131232',
    },
    {
      id: 5,
      name: 'Naem',

      contact: '10901232',
    },
    {
      id: 6,
      name: 'Kashif',
      contact: '13131232',
    },
    {
      id: 7,
      name: 'Dilawer',
      contact: '13131232',
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
  const header = ['Id', 'Name', 'Contact', 'Edit'];

  return (
    <>
      <VendorTitleContainer>
        <VendorTitle>Orders</VendorTitle>
      </VendorTitleContainer>

      <CustomTable editDelete={editDelete} header={header} rows={tableData} />
    </>
  );
}

export default OrderHistory;
