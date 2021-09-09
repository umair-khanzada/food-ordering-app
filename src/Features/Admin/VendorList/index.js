import React from 'react';

import { TableCell, TableRow } from '@material-ui/core';

import CustomTable from '../../../components/CustomTable';

function VendorList() {
  const tableData = [
    {
      id: 2,
      name: 'user2',
      contact: '13131232',
      timing: '1:40',
      building: 'main',
    },
    {
      id: 3,
      name: 'user3',
      contact: '1309232',
      timing: '1:00',
      building: 'qasre sheeren',
    },
    {
      id: 4,
      name: 'user4',
      contact: '23131232',
      timing: '1:50',
      building: 'qasre sheeren',
    },
    {
      id: 5,
      name: 'user5',
      contact: '10901232',
      timing: '1:10',
      building: 'main',
    },
  ];

  function GetTableData() {
    return (
      <>
        {tableData.map((data) => {
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
  const tableHead = (
    <>
      <TableCell>Id</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Contact</TableCell>
      <TableCell>Timing</TableCell>
      <TableCell>Building</TableCell>
      <TableCell>Edit</TableCell>
    </>
  );

  const tableContent = GetTableData();

  return <CustomTable content={tableContent} header={tableHead} />;
}

export default VendorList;
