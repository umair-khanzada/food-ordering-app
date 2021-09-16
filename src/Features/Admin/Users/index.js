import React from 'react';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { userList } from '../../../Mock/UserList';
import { UsersTitleContainer, UsersTitle } from './style';
function UsersList() {
  const header = ['Id', 'Name', 'Email', 'Contact', 'Edit'];
  return (
    <>
      <UsersTitleContainer>
        <UsersTitle>Users</UsersTitle>
        <CommonButton property="Add Users" />
      </UsersTitleContainer>

      <CustomTable header={header} isEditDelete rows={userList} tablewidth="90%" />
    </>
  );
}

export default UsersList;
