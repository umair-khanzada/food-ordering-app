import React, { useEffect, useState } from 'react';

import { Box } from '@mui/system';
import { useHistory } from 'react-router';

import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { DeleteBalanceById } from './mutations';
import { FetchBalances } from './requests';

const BalanceSheet = () => {
  const { isLoading, data, refetch } = FetchBalances();

  const header = ['No', 'User', 'Balance', 'Edit'];

  const [balanceData, setBalanceData] = useState([]);

  useEffect(() => {
    if (data) {
      const filteredData = [];
      data.map((item) => {
        delete item['vendor'];
        delete item['vendorId'];
        delete item['userId'];

        filteredData.push(item);
      });
      setBalanceData(filteredData);
    }
  }, [data]);

  const history = useHistory();
  const { editBalanceSheet } = RouteNames;

  const onEdit = ({ id }) => {
    history.push({
      pathname: editBalanceSheet,
      search: '?id=' + id,
    });
  };

  const { isLoading: isMutating, mutate, isSuccess } = DeleteBalanceById();

  const onDelete = ({ id }) => {
    mutate(id);
  };

  isSuccess && refetch();

  return isLoading ? (
    <Loader />
  ) : (
    <Box mt={4}>
      <CustomTable
        cellWidth="30%"
        header={header}
        isDeleting={isMutating}
        isEditDelete
        onDelete={onDelete}
        onEdit={onEdit}
        rows={balanceData}
        tablewidth="50%"
      />
      ;
    </Box>
  );
};

export default BalanceSheet;
