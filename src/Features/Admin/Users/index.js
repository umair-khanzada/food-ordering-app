import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import RouteNames from '../../../routes/RouteNames';
import { fetchUsers } from './actions';
import { UsersTitleContainer, UsersTitle } from './style';
function UsersList() {
  const { addUser, editUser } = RouteNames;

  const onEdit = (row) => {
    history.push({
      pathname: editUser,
      state: { data: row },
    });
  };

  const onDelete = (row) => {
    row;
  };

  const history = useHistory();

  const [users, setUsers] = useState([]);

  const getUsersResponseFromEpic = (response) => {
    setUsers(response);
  };

  const [header, setHeader] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(getUsersResponseFromEpic));
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      console.log(users);
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
