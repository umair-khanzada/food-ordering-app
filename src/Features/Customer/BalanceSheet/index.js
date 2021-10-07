import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import { FetchBalances } from './request';

const UserBalanceSheet = () => {
  const userid = useSelector((state) => {
    const {
      authReducer: { id },
    } = state;
    return id;
  });
  const { data, isFetching } = FetchBalances();

  const header = ['Sno', 'Vendor', 'Balance'];

  const [balanceData, setBalanceData] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      saveBalance(data);
    }
  }, [data]);
  const saveBalance = (data) => {
    const balanceData = data
      .filter(({ userId }) => {
        const { id } = userId;
        return userid === id;
      })
      .map(({ vendorId, id, amount }) => {
        const { name: vendorName } = vendorId;

        return { vendorName, amount, id };
      });

    setBalanceData(balanceData);
  };
  return isFetching ? (
    <Loader />
  ) : (
    <Box mt={8}>
      <CustomTable cellWidth="30%" header={header} rows={balanceData} tablewidth="50%" />;
    </Box>
  );
};

export default UserBalanceSheet;
