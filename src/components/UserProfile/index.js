import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 400,
    minWidth: 300,
    margin: 20,
  },
});
export default function UserProfile() {
  const styleClass = useStyles();
  return (
    <TableContainer className={styleClass.table} component={Paper} style={{ width: 400 }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Employment Status:</TableCell>
            <TableCell>On job</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Full Name:</TableCell>
            <TableCell>M Haris Moin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Short Name</TableCell>
            <TableCell>Haris</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gender:</TableCell>
            <TableCell>Male</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Full Father Name:</TableCell>
            <TableCell>Moin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Employenment Code:</TableCell>
            <TableCell>22331</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email:</TableCell>
            <TableCell>haris@gamil.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Department:</TableCell>
            <TableCell>Front end</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Designation:</TableCell>
            <TableCell>intern</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Line Manager Name:</TableCell>
            <TableCell>Ishaq bhojani</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Functional Group:</TableCell>
            <TableCell>UI</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
