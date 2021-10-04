import React, { useState } from 'react';

import { Box } from '@mui/system';

import CustomTable from '../../../components/CustomTable';

const BalanceSheet = () => {
  const [rows, setRows] = useState([]);

  const header = ['No', 'User', 'Balance'];

  return (
    <Box mt={4}>
      <CustomTable cellWidth="30%" header={header} isEditDelete rows={rows} tablewidth="70%" />;
    </Box>
  );
};

export default BalanceSheet;
