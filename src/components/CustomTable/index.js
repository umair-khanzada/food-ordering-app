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
import { useDispatch } from 'react-redux';

import { closeModal, openModal } from '../Modal/action';
import AlertModal from '../Modal/inex';
import TablePaginationActions from './Pagination';
import { CustomTableHead, CustomTableContainer, TableHeader, DeleteIcon } from './style';

export default function CustomTable({ rows, header, onDelete, cellWidth, tablewidth, onEdit, isEditDelete }) {
  const dispatch = useDispatch();

  const [rowsData, setRowsData] = useState([...rows]);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 10);

    setPage(0);
  };

  const modalContentText = 'Are you sure you want to delete ?';
  const [currentSelectedRow, setCurrentSelectedRow] = useState({});

  const onRowDelete = () => {
    setRowsData((prev) => prev.filter((data) => data !== currentSelectedRow));

    onDelete(currentSelectedRow);
    dispatch(closeModal());
  };

  const RowPerPage = (rowsPerPage, rowsData, page) => {
    if (rowsPerPage > 0) {
      return rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }

    return rowsData;
  };

  return (
    <CustomTableContainer component={Paper} tablewidth={tablewidth}>
      {isEditDelete && <AlertModal content={modalContentText} onConfirm={onRowDelete} />}

      <Table aria-label="custom pagination table">
        <CustomTableHead>
          <TableRow>
            {header.map((head, index) => (
              <TableHeader key={index}>{head}</TableHeader>
            ))}
          </TableRow>
        </CustomTableHead>

        <TableBody>
          {RowPerPage(rowsPerPage, rowsData, page).map((row) => (
            <TableRow key={row.name}>
              {Object.keys(row).map((data, index) => (
                <TableCell key={index} cellwidth={cellWidth}>
                  {row[data]}
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
                      dispatch(openModal());
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              )}
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
