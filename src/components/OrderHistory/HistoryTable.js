import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '53%',
    marginTop: '101px',
  },
  reference: {
    color: 'cornflowerblue',
  },
  status: {
    backgroundColor: '#17be9a',
    color: 'white',
  },
});

function createData(reference, order, placed, placedby, status, description, cost) {
  return { reference, order, placed, placedby, status, description, cost };
}

const rows = [
  createData('August 2021', 'tc13901203912', '09-09-21', 'Fahad Ali', 'Completed', 'Transcription', '23 RS'),
  createData('May 2021', 'tc13901203912', '08-09-21', 'Hamza Ali', 'Completed', 'Transcription', '23 RS'),
  createData('June 2021', 'tc13901203912', '07-09-21', 'Haris Qadeer', 'Completed', 'Transcription', '23 RS'),
  createData('July 2021', 'tc13901203912', '06-09-21', 'Aslam Shaikh', 'Completed', 'Transcription', '23 RS'),
  createData('October 2021', 'tc13901203912', '09-09-20', 'Haris Shaikh', 'Completed', 'Transcription', '23 RS'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Reference#</TableCell>
            <TableCell align="right">Order#</TableCell>
            <TableCell align="right">Placed</TableCell>
            <TableCell align="right">Placed by</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.reference}>
              <TableCell className={classes.reference} component="th" scope="row">
                {row.reference}
              </TableCell>
              <TableCell align="right" className={classes.reference}>
                {row.order}
              </TableCell>
              <TableCell align="right">{row.placed}</TableCell>
              <TableCell align="right">{row.placedby}</TableCell>
              <TableCell align="right" className={classes.status}>
                {row.status}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
