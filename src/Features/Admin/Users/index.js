import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { FetchUsers } from '../Common Requests/request';
import { deleteUserById } from './actions';
import { UsersTitleContainer, UsersTitle } from './style';

function UsersList() {
  const [users, setUsers] = useState([]);

  const usersData = FetchUsers('user');
  const header = ['S.No', 'name', 'email', 'Edit'];
  const dispatch = useDispatch();
  useEffect(() => {
    if (Array.isArray(usersData)) {
      usersData.map((user) => {
        const removeElements = ['password', 'isEmailVerified'];

        removeElements.map((removeElement) => delete user[removeElement]);
      });
      setUsers(usersData);
    }
  }, [usersData]);

  const { addUser, editUser } = RouteNames;

  const onEdit = ({ id }) => {
    history.push({
      pathname: editUser,
      search: '?id=' + id,
    });
  };

  const onDelete = ({ id }) => {
    dispatch(deleteUserById(id));
  };

  const history = useHistory();

  return (
    <>
      <UsersTitleContainer>
        <UsersTitle>Users</UsersTitle>
        <CommonButton onClick={() => history.push(addUser)} property="Add Users" />
      </UsersTitleContainer>

      <CustomTable header={header} isEditDelete onDelete={onDelete} onEdit={onEdit} rows={users} tablewidth="90%" />
    </>
  );
}

export default UsersList;
