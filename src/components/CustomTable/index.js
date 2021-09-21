/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

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

import DeleteModal from '../DeleteModal';
import TablePaginationActions from './Pagination';
import { CustomTableHead, CustomTableContainer, TableHeader, DeleteIcon } from './style';
export default function CustomTable({ rows, header, onDelete, cellWidth, tablewidth, onEdit, isEditDelete }) {
  const [toggleModal, setToggleModal] = React.useState(false);

  const toggleDeleteModel = () => {
    setToggleModal(!toggleModal);
  };

  const [rowsData, setRowsData] = useState([...rows]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    setRowsData([...rows]);
  }, [rows]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 10);

    setPage(0);
  };

  const [currentSelectedRow, setCurrentSelectedRow] = useState({});

  const onRowDelete = () => {
    setRowsData((prev) => prev.filter((data) => data !== currentSelectedRow));

    onDelete(currentSelectedRow);
  };

  const RowPerPage = (rowsPerPage, rowsData, page) => {
    if (rowsPerPage > 0) {
      return rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }

    return rowsData;
  };

  return (
    <CustomTableContainer component={Paper} tablewidth={tablewidth}>
      {isEditDelete && <DeleteModal handleClose={toggleDeleteModel} onRowDelete={onRowDelete} open={toggleModal} />}

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
            (row, index) => (
              <TableRow key={index}>
                {Object.keys(row).map((data, index) => (
                  <TableCell key={index} cellWidth={cellWidth}>
                    {typeof row[data] === 'boolean' ? row[data].toString() : row[data]}
                  </TableCell>
                ))}
                {isEditDelete && (
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
                )}
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
