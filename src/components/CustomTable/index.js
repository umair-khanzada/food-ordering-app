import React from 'react';

import { TableRow, Table, TableBody, TablePagination } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import PropTypes from 'prop-types';

import { CustomTableHead, EditDeleteCell, CustomTableContainer } from './Style';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,

    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();

  const theme = useTheme();

  const { count, page, rowsPerPage, onPageChange } = props;
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <div className={classes.root}>
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
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,

  onPageChange: PropTypes.func.isRequired,

  page: PropTypes.number.isRequired,

  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomTable({ rows, header, editDelete, tablewidth, isEditDelete }) {
  const classes = useStyles2();

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // eslint-disable-next-line radix

    // eslint-disable-next-line radix
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };

  return (
    <CustomTableContainer component={Paper} tablewidth={tablewidth}>
      <Table aria-label="custom pagination table" className={classes.table}>
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
          {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
            <TableRow key={row.name}>
              {Object.keys(row).map((data, index) => (
                <TableCell key={index} component="th" scope="row">
                  {row[data]}
                </TableCell>
              ))}
              {editDelete !== undefined && <EditDeleteCell>{editDelete}</EditDeleteCell>}
            </TableRow>
          ))}

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
              colSpan={3}
              count={rows.length}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5]}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },

                native: true,
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </CustomTableContainer>
  );
}
