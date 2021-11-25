import React, { useEffect, useState } from 'react';

import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { toggleSnackbarOpen } from '../../../components/AlertMessage/alertRedux/actions';
import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { ERROR, GetHeader, SUCCESS } from '../../../scripts/constants';
import { logout } from '../../Auth/actions';
import { deleteUserById } from '../Common Requests/mutation';
import { FetchUsers } from '../Common Requests/request';
import { UsersTitleContainer, UsersTitle, CustomTableContainer } from './style';

function UsersList() {
  const [users, setUsers] = useState([]);
  const { headers } = GetHeader();
  const successMessage = 'Successfull user has been deleted';
  const { data: usersData, refetch: refetchUser, isFetching } = FetchUsers('user');
  const header = ['S.No', 'Email', 'Name', 'Contact', 'Edit'];

  useEffect(() => {
    if (Array.isArray(usersData)) {
      usersData.map((user) => {
        const removeElements = ['password', 'isEmailVerified'];

        removeElements.map((removeElement) => delete user[removeElement]);
      });
      setUsers(usersData);
    }
  }, [usersData]);

  const dispatch = useDispatch();

  const DeleteUser = useMutation(deleteUserById, {
    onError: (error) => {
      const {
        response: {
          data: { message },
          status,
        },
      } = error;

      if (status === 401) {
        dispatch(logout({ history }));
        dispatch(toggleSnackbarOpen({ snackbarMessage: 'Session Expired! Please Log in again.', messageType: ERROR }));
      } else {
        dispatch(toggleSnackbarOpen({ snackbarMessage: message, messageType: ERROR }));
      }
    },
    onSuccess: () => {
      refetchUser();
      dispatch(
        toggleSnackbarOpen({
          snackbarMessage: successMessage,
          messageType: SUCCESS,
        }),
      );
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
        <CustomTableContainer>
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
        </CustomTableContainer>
      )}
    </>
  );
}

export default UsersList;
