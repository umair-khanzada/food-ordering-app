import React from 'react';

import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { userList } from '../../../Mock/UserList';
import { UsersTitleContainer, UsersTitle } from './style';
function UsersList() {
  const onEdit = (row) => {
    history.push({
      pathname: '/edituser',
      state: { data: row },
    });
  };

  const header = ['No', 'Name', 'Email', 'Contact', 'Edit'];
  const history = useHistory();

  return (
    <>
      <UsersTitleContainer>
        <UsersTitle>Users</UsersTitle>
        <CommonButton onClick={() => history.push('/adduser')} property="Add Users" />
      </UsersTitleContainer>

      <CustomTable header={header} isEditDelete onEdit={onEdit} rows={userList} tablewidth="80%" />
    </>
  );
}

export default UsersList;
