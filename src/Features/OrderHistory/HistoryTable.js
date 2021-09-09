import React from 'react';
import { useState } from 'react';

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
    width: '100%',
  },
  reference: {
    color: 'cornflowerblue',
  },
  status: {
    backgroundColor: '#17be9a',
    color: 'white',
  },
});
const originalRows = [
  {
    reference: 'August 2021',
    order: 'tc13901203912',
    placed: '09-09-21',
    placedby: 'Fahad Ali',
    status: 'Completed',
    description: 'Transcription',
    cost: '23 RS',
  },
  {
    reference: 'August 2021',
    order: 'tc13901203912',
    placed: '09-09-21',
    placedby: 'Fahad Ali',
    status: 'Completed',
    description: 'Transcription',
    cost: '23 RS',
  },
  {
    reference: 'August 2021',
    order: 'tc13901203912',
    placed: '09-09-21',
    placedby: 'Fahad Ali',
    status: 'Completed',
    description: 'Transcription',
    cost: '23 RS',
  },
  {
    reference: 'August 2021',
    order: 'tc13901203912',
    placed: '09-09-21',
    placedby: 'Fahad Ali',
    status: 'Completed',
    description: 'Transcription',
    cost: '23 RS',
  },
  {
    reference: 'August 2021',
    order: 'tc13901203912',
    placed: '09-09-21',
    placedby: 'Fahad Ali',
    status: 'Completed',
    description: 'Transcription',
    cost: '23 RS',
  },
  {
    reference: 'August 2021',
    order: 'tc13901203912',
    placed: '09-09-21',
    placedby: 'Fahad Ali',
    status: 'Completed',
    description: 'Transcription',
    cost: '23 RS',
  },
];

// function createData(reference, order, placed, placedby, status, description, cost) {
//   return { reference, order, placed, placedby, status, description, cost };
// }

export default function BasicTable() {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState('');
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.placedby.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched('');
    requestSearch(searched);
  };

  return (
    <>
      {/* <SearchBar
        onCancelSearch={() => cancelSearch()}
        onChange={(searchVal) => requestSearch(searchVal)}
        value={searched}
      /> */}
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
    </>
  );
}
