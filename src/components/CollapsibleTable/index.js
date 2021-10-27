import React, { useEffect, useState } from 'react';

import { TableFooter, TablePagination } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

import TablePaginationActions from '../CustomTable/Pagination';
import ConfirmDeletModal from '../Modal';
import { closeModal, openModal } from '../Modal/action';
import {
  CollapseTableContainer,
  CollapseTableHead,
  DeleteProgress,
  OrderItems,
  TableHeader,
  CrossIcon,
  RecievedIcon,
  EditCell,
  DisabledRecievedIcon,
  DisabledCrossIcon,
} from './style';

const CollapsibleTable = ({ isDeleting, isPagination, onReject, header, rows, isEditDelete, onEdit }) => {
  const dispatch = useDispatch();
  const [currentSelectedRow, setCurrentSelectedRow] = React.useState({});
  const onCancel = () => dispatch(closeModal());
  const onRowDelete = () => {
    onReject(currentSelectedRow);
    dispatch(closeModal());
  };
  const deletModalButtons = [
    { property: 'Cancel', clickHandler: onCancel },
    { property: 'Confirm', clickHandler: onRowDelete },
  ];
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(50);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 10);

    setPage(0);
  };

  const [rowsData, setRowsData] = useState([...rows]);
  useEffect(() => {
    setRowsData([...rows]);
  }, [rows]);
  const RowPerPage = (rowsPerPage, rowsData, page) => {
    if (rowsPerPage > 0) {
      return rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }

    return rowsData;
  };
  const ColapseTableRow = ({ row: { id, name, items, status, price, user_id }, SNo, index }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton aria-label="expand row" onClick={() => setOpen(!open)} size="small">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{SNo * 5 + index + 1}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{items.length}</TableCell>
          <TableCell>{price}</TableCell>

          <TableCell>{status}</TableCell>
          {isEditDelete && (
            <EditCell>
              {status === 'pending' ? (
                <>
                  <IconButton onClick={() => onEdit({ id, status, price, user_id })}>
                    <RecievedIcon />
                  </IconButton>

                  {isDeleting && currentSelectedRow.id == id ? (
                    <DeleteProgress size="20px" />
                  ) : (
                    <IconButton
                      onClick={() => {
                        setCurrentSelectedRow({ id, status, price });
                        dispatch(openModal());
                      }}
                    >
                      <CrossIcon />
                    </IconButton>
                  )}
                </>
              ) : (
                <>
                  <DisabledRecievedIcon />
                  <DisabledCrossIcon />
                </>
              )}
            </EditCell>
          )}
        </TableRow>
        <TableRow>
          <TableCell colSpan={7}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 5 }}>
                <Typography component="div" gutterBottom variant="h5">
                  Items
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <OrderItems align="center">Item</OrderItems>
                      <OrderItems align="center">Quantity </OrderItems>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map(({ name, quantity }) => (
                      <TableRow key={name}>
                        <TableCell align="center">{name}</TableCell>
                        <TableCell align="center">{quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  return (
    <CollapseTableContainer component={Paper}>
      {isEditDelete && (
        <ConfirmDeletModal modalButtons={deletModalButtons}>
          <div>Are you sure you want to reject ?</div>
        </ConfirmDeletModal>
      )}
      <Table aria-label="collapsible table">
        <CollapseTableHead>
          <TableRow>
            <TableCell />
            {header.map((head, index) => (
              <TableHeader key={head + index}>{head}</TableHeader>
            ))}
          </TableRow>
        </CollapseTableHead>
        <TableBody>
          {RowPerPage(rowsPerPage, rowsData, page).map((row, index) => (
            <ColapseTableRow key={row.id} index={index} row={row} SNo={page} />
          ))}
        </TableBody>
        {isPagination ? (
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
                rowsPerPageOptions={[50]}
                SelectProps={{
                  native: true,
                }}
              />
            </TableRow>
          </TableFooter>
        ) : null}
      </Table>
    </CollapseTableContainer>
  );
};
export default CollapsibleTable;
