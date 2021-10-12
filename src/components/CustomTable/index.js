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
import { useDispatch } from 'react-redux';

import ConfirmDeletModal from '../Modal';
import { closeModal, openModal } from '../Modal/action';
import TablePaginationActions from './Pagination';
import { CustomTableHead, CustomTableContainer, TableHeader, DeleteIcon, DeleteProgress } from './style';
export default function CustomTable({
  isDeleting,
  rows,
  header,
  onDelete,
  cellWidth,
  tablewidth,
  onEdit,
  isEditDelete,
}) {
  const dispatch = useDispatch();
  const [currentSelectedRow, setCurrentSelectedRow] = useState({});
  const onCancel = () => dispatch(closeModal());
  const onRowDelete = () => {
    onDelete(currentSelectedRow);
    dispatch(closeModal());
  };

  const deletModalButtons = [
    { property: 'Cancel', clickHandler: onCancel },
    { property: 'Confirm', clickHandler: onRowDelete },
  ];
  const [rowsData, setRowsData] = useState([...rows]);
  useEffect(() => {
    setRowsData([...rows]);
  }, [rows]);
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 10);

    setPage(0);
  };

  const RowPerPage = (rowsPerPage, rowsData, page) => {
    if (rowsPerPage > 0) {
      return rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }

    return rowsData;
  };

  return (
    <CustomTableContainer component={Paper} tablewidth={tablewidth}>
      {isEditDelete && (
        <ConfirmDeletModal modalButtons={deletModalButtons}>
          <div>Are you sure you want to delete ?</div>
        </ConfirmDeletModal>
      )}

      <Table aria-label="custom pagination table">
        <CustomTableHead>
          <TableRow>
            {header.map((head, index) => {
              return <TableHeader key={index}>{head}</TableHeader>;
            })}
          </TableRow>
        </CustomTableHead>

        <TableBody>
          {RowPerPage(rowsPerPage, rowsData, page).map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{page * 5 + index + 1}</TableCell>
              {Object.keys(row).map((data, index) => {
                if (data != 'id' && data !== 'role' && data != 'createdBy') {
                  return (
                    <TableCell
                      key={index}
                      cellwidth={cellWidth}
                      style={{ color: `${data === 'amount' && row[data] < 0 ? 'red' : 'black'}` }}
                    >
                      {row[data]}
                    </TableCell>
                  );
                }
              })}

              {isEditDelete && (
                <TableCell>
                  <IconButton onClick={() => onEdit(row)}>
                    <Edit />
                  </IconButton>

                  {isDeleting && currentSelectedRow.id == row.id ? (
                    <DeleteProgress size="20px" />
                  ) : (
                    <IconButton
                      onClick={() => {
                        setCurrentSelectedRow(row);
                        dispatch(openModal());
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
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
