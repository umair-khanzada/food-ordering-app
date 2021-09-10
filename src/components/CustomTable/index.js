import React from 'react';

import { TableContainer, TableHead, TableRow, Table, TableBody, TableCell } from '@material-ui/core';

function CustomTable({ head, content }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {head.map((data, i) => {
              return <TableCell key={i}>{data}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>{content}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
