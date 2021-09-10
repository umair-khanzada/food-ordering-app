import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { userList } from '../../../Mock/UserList';
import { VendorTitleContainer, VendorTitle, DeleteIcon } from './style';
function UsersList() {
  const editDelete = (
    <>
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
  const header = ['Id', 'Name', 'Email', 'Contact', 'Edit'];
  const history = useHistory();

  return (
    <>
      <VendorTitleContainer>
        <VendorTitle>Users</VendorTitle>
        <CommonButton property="Add Users" />
      </VendorTitleContainer>

      <CustomTable editDelete={editDelete} header={header} isEditDelete rows={userList} />
    </>
  );
}

export default UsersList;
