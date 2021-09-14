import React, { useState } from 'react';

import {
  TableRow,
  Table,
  TableBody,
  TablePagination,
  TableFooter,
  TableCell,
  Paper,
  IconButton,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import DeleteModal from '../DeleteModal';
import TablePaginationActions from './Pagination';
import { CustomTableHead, CustomTableContainer } from './style';

export default function CustomTable({ rows, header, tablewidth, onEdit, isEditDelete, cellWidth }) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [rowsData, setRowsData] = useState([...rows]);
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
  const [currentSelectedRow, setCurrentSelectedRow] = useState({});
  const onDelete = () => {
    setRowsData((prev) => prev.filter((data) => data !== currentSelectedRow));
  };
  return (
    <CustomTableContainer component={Paper} tablewidth={tablewidth}>
      {isEditDelete && <DeleteModal handleClose={handleClose} onDelete={onDelete} open={open} />}
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
          {(rowsPerPage > 0 ? rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rowsData).map(
            (row) => (
              <TableRow key={row.name}>
                {Object.keys(row).map((data, index) => (
                  <TableCell key={index} style={{ width: cellWidth }}>
                    {row[data]}
                  </TableCell>
                ))}
                {isEditDelete ? (
                  <TableCell style={{ width: cellWidth }}>
                    <IconButton onClick={() => onEdit(row)}>
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setCurrentSelectedRow(row);
                        handleClickOpen();
                      }}
                    >
                      <Delete style={{ color: '#00b3e3' }} />
                    </IconButton>
                  </TableCell>
                ) : null}
              </TableRow>
            ),
          )}
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
