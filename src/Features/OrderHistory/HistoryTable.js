import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CustomTable from '../../components/CustomTable';

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
const header = ['reference', 'order', 'placed', 'placedby', 'status', 'description', 'cost'];
const tableData = [
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

export default function BasicTable() {
  return <CustomTable header={header} rows={tableData} />;
}
