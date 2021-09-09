import React from 'react';

import { TableContainer, TableHead, TableRow, Table, TableBody } from '@material-ui/core';

function CustomTable({ header, content }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>{header}</TableRow>
        </TableHead>
        <TableBody>{content}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
