import React from 'react';

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
    <Box height="80vh" mt={4}>
      <CustomTable
        cellWidth="30%"
        header={header}
        isDeleting={isMutating}
        isEditDelete
        onDelete={onDelete}
        onEdit={onEdit}
        pageName="BalanceSheet"
        rows={data}
        tablewidth="90%"
      />
    </Box>
  );
};

export default BalanceSheet;
