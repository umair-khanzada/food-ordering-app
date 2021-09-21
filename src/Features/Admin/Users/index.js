import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { deleteUserById, fetchUsers } from './actions';
import { UsersTitleContainer, UsersTitle } from './style';
function UsersList() {
  const { addUser, editUser } = RouteNames;

  const onEdit = (row) => {
    history.push({
      pathname: editUser,
      search: '?id=' + row.id,
    });
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const onDelete = (row) => {
    console.log(row);
    dispatch(deleteUserById(row.id));
  };
  const [users, setUsers] = useState([]);
  const [header, setHeader] = useState([]);

  const getUsersResponseFromEpic = (response) => {
    setUsers(response);
  };

  useEffect(() => {
    dispatch(fetchUsers(getUsersResponseFromEpic));
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setHeader([...Object.keys(users[0]), 'Edit']);
    }
  }, [users]);

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
