import * as React from 'react';

import { Edit } from '@material-ui/icons';
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

import ConfirmDeletModal from '../Modal';
import { closeModal, openModal } from '../Modal/action';
import { CollapseTableContainer, CollapseTableHead, DeleteIcon, DeleteProgress, TableHeader } from './style';

const CollapsibleTable = ({ isDeleting, onDelete, header, rows, isEditDelete, onEdit }) => {
  const dispatch = useDispatch();
  const [currentSelectedRow, setCurrentSelectedRow] = React.useState({});
  const onCancel = () => dispatch(closeModal());
  const onRowDelete = () => {
    onDelete(currentSelectedRow);
    dispatch(closeModal());
  };
  const ColapseTableRow = ({ row: { id, name, items, status, price }, SNo }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton aria-label="expand row" onClick={() => setOpen(!open)} size="small">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>{SNo + 1}</TableCell>
          <TableCell component="th" scope="row">
            {name}
          </TableCell>
          <TableCell>{price}</TableCell>
          <TableCell>{items.length + 1}</TableCell>
          <TableCell>{status}</TableCell>
          {isEditDelete && (
            <TableCell>
              <IconButton onClick={() => onEdit(id)}>
                <Edit />
              </IconButton>

              {isDeleting && currentSelectedRow == id ? (
                <DeleteProgress size="20px" />
              ) : (
                <IconButton
                  onClick={() => {
                    setCurrentSelectedRow(id);
                    dispatch(openModal());
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </TableCell>
          )}
        </TableRow>
        <TableRow>
          <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 5 }}>
                <Typography component="div" gutterBottom variant="h5">
                  Items
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Item</TableCell>
                      <TableCell align="center">Quantity </TableCell>
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

  const deletModalButtons = [
    { property: 'Cancel', clickHandler: onCancel },
    { property: 'Confirm', clickHandler: onRowDelete },
  ];
  return (
    <CollapseTableContainer component={Paper}>
      {isEditDelete && (
        <ConfirmDeletModal modalButtons={deletModalButtons}>
          <div>Are you sure you want to delete ?</div>
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
          {rows.map((order, index) => (
            <ColapseTableRow key={order.id} row={order} SNo={index} />
          ))}
        </TableBody>
      </Table>
    </CollapseTableContainer>
  );
};
export default CollapsibleTable;
