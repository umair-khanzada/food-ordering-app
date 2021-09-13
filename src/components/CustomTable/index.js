import React, { useState } from 'react';

import { TableRow, Table, TableBody, TablePagination, IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import { Edit } from '@material-ui/icons';

import TablePaginationActions from './Pagination';
import { CustomTableHead, CustomTableContainer, DeleteIcon } from './style';

export default function CustomTable({ rows, header, cellWidth, tablewidth }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // eslint-disable-next-line radix
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <CustomTableContainer component={Paper} tablewidth={tablewidth}>
      <Table aria-label="custom pagination table">
        <CustomTableHead>
          <TableRow>
            {header.map((head, index) => (
              <TableCell key={index} style={{ color: 'white', padding: '10px', fontSize: '16px' }}>
                {head}
              </TableCell>
            ))}
          </TableRow>
        </CustomTableHead>
        <TableBody>
          {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
            <TableRow key={row.name}>
              {Object.keys(row).map((data, index) => (
                <TableCell key={index} style={{ width: cellWidth }}>
                  {row[data]}
                </TableCell>
              ))}
              <TableCell>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              ActionsComponent={TablePaginationActions}
              colSpan={7}
              count={rows.length}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5]}
              SelectProps={{
                native: true,
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </CustomTableContainer>
  );
}
