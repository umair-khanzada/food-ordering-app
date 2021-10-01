import React from 'react';

import CustomTable from '../../../components/CustomTable/index';

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
  return <CustomTable header={header} rows={tableData} tablewidth="81%" />;
}
