import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { GetHeader } from '../../../scripts/constants';
import { deleteUserById } from '../Common Requests/mutation';
import { FetchUsers } from '../Common Requests/request';
import { UsersTitleContainer, UsersTitle } from './style';

function UsersList() {
  const [users, setUsers] = useState([]);
  const { headers } = GetHeader();

  const { data: usersData, refetch: refetchUser, isFetching } = FetchUsers('user');
  const header = ['S.No', 'name', 'email', 'Edit'];

  useEffect(() => {
    if (Array.isArray(usersData)) {
      usersData.map((user) => {
        const removeElements = ['password', 'isEmailVerified'];

        removeElements.map((removeElement) => delete user[removeElement]);
      });
      setUsers(usersData);
    }
  }, [usersData]);
  const DeleteUser = useMutation(deleteUserById, {
    onError: () => {},
    onSuccess: () => {
      refetchUser();
    },
  });
  const { addUser, editUser } = RouteNames;

  const onEdit = ({ id }) => {
    history.push({
      pathname: editUser,
      search: '?id=' + id,
    });
  };

  const onDelete = ({ id }) => {
    DeleteUser.mutateAsync({ id, headers });
  };

  const history = useHistory();

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <UsersTitleContainer>
            <UsersTitle>Users</UsersTitle>
            <CommonButton onClick={() => history.push(addUser)} property="Add Users" />
          </UsersTitleContainer>

          <CustomTable
            header={header}
            isDeleting={DeleteUser.isLoading}
            isEditDelete
            onDelete={onDelete}
            onEdit={onEdit}
            rows={users}
            tablewidth="90%"
          />
        </>
      )}
    </>
  );
}

export default UsersList;
