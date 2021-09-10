import React from 'react';

import { TableCell, TableRow } from '@material-ui/core';

import CustomTable from '../../../components/CustomTable';
import { vendorList } from '../../../Mock/VendorList';
function VendorList() {
  function GetTableData() {
    return (
      <>
        {vendorList.map((data) => {
          return (
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.contact}</TableCell>
              <TableCell>{data.timing}</TableCell>
              <TableCell>{data.building}</TableCell>
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
