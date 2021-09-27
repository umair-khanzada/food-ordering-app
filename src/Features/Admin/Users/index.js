import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { deleteUserById, fetchUsers } from './actions';
import { UsersTitleContainer, UsersTitle } from './style';
function UsersList() {
  const dispatch = useDispatch();

  const [users, setUsers] = useState('');

  const removeElements = ['role', 'password', 'isEmailVerified'];
  const header = ['S.No', 'name', 'email', 'Edit'];
  const getUsers = (response) => {
    setUsers(response);
  };

  useEffect(() => {
    dispatch(fetchUsers(getUsers));
  }, []);

  useEffect(() => {
    if (users) {
      users.map((user) => {
        removeElements.map((removeElement) => delete user[removeElement]);
      });
    }
  }, [users]);

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
