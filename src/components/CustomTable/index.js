import React, { useState } from 'react';

import {
  TableRow,
  Table,
  TableBody,
  TablePagination,
  IconButton,
  TableCell,
  TableFooter,
  Paper,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

import AlertModal from '../Modal/inex';
import TablePaginationActions from './Pagination';
import { CustomTableHead, CustomTableContainer, TableHeader, DeleteIcon, TableCellContainer } from './style';
export default function CustomTable({ rows, header, onDelete, cellWidth, tablewidth, onEdit, isEditDelete }) {
  const content = 'Are you sure you want to delete ?';
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [rowsData, setRowsData] = useState([...rows]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage((event.target.value, 10));
    setPage(0);
  };
  const [currentSelectedRow, setCurrentSelectedRow] = useState({});
  const onRowDelete = () => {
    setRowsData((prev) => prev.filter((data) => data !== currentSelectedRow));
    onDelete(currentSelectedRow);
  };
  return (
    <CustomTableContainer component={Paper} tablewidth={tablewidth}>
      {isEditDelete && <AlertModal content={content} handleClose={handleClose} onConfirm={onRowDelete} open={open} />}
      <Table aria-label="custom pagination table">
        <CustomTableHead>
          <TableRow>
            {header.map((head, index) => (
              <TableHeader key={index}>{head}</TableHeader>
            ))}
          </TableRow>
        </CustomTableHead>
        <TableBody>
          {(rowsPerPage > 0 ? rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rowsData).map(
            (row) => (
              <TableRow key={row.name}>
                {Object.keys(row).map((data, index) => (
                  <TableCellContainer key={index} cellwidth={cellWidth}>
                    {row[data]}
                  </TableCellContainer>
                ))}
                {isEditDelete ? (
                  <TableCell>
                    <IconButton onClick={() => onEdit(row)}>
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setCurrentSelectedRow(row);
                        handleClickOpen();
                      }}
                    >
                      <DeleteIcon />
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
