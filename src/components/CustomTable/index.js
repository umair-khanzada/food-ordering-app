import React, { useState } from 'react';

import { TableRow, Table, TableBody, TablePagination } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import { Edit } from '@material-ui/icons';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { DeleteIcon } from '../../Features/Admin/Vendors/style';
import DeleteButton from '../Delete Button';
import { CustomTableHead, IconContainer, EditDeleteCell, CustomTableContainer } from './style';
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <IconContainer>
      <IconButton aria-label="previous page" disabled={page === 0} onClick={handleBackButtonClick}>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        aria-label="next page"
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        onClick={handleNextButtonClick}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </IconContainer>
  );
}

export default function CustomTable({ rows, header, tablewidth, onEdit, isEditDelete }) {
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
      {isEditDelete && <DeleteButton handleClose={handleClose} onDelete={onDelete} open={open} />}

      <Table aria-label="custom pagination table">
        <CustomTableHead>
          <TableRow>
            {header.map((head, index) => (
              <TableCell key={index} style={{ color: 'white' }}>
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
                  <TableCell key={index} style={{ width: 200 }}>
                    {row[data]}
                  </TableCell>
                ))}

                {isEditDelete ? (
                  <EditDeleteCell>
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
                  </EditDeleteCell>
                ) : null}
              </TableRow>
            ),
          )}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
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
