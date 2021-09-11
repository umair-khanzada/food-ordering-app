import React from 'react';

import { TableCell, TableRow } from '@material-ui/core';

import CustomTable from '../../../components/CustomTable';
import { vendorList } from '../../../Mock/VendorList';
function VendorList() {
  function GetTableData() {
    return (
      <>
        {vendorList.map(({ id, name, contact, timing, building }) => {
          return (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{contact}</TableCell>
              <TableCell>{timing}</TableCell>
              <TableCell>{building}</TableCell>
              <TableCell>Edit / delete</TableCell>
            </TableRow>
          );
        })}
      </>
    );
  }
  const head = ['Id', 'Name', 'Contact', 'Timing', 'Building', 'Edit'];

  const tableContent = GetTableData();

  return <CustomTable content={tableContent} head={head} />;
}

export default VendorList;
