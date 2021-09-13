import { Delete } from '@material-ui/icons';
import styled from 'styled-components';
export const UsersTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
`;

export const UsersTitle = styled.div`
  color: grey;
  font-size: 25px;

  font-weight: 500;
`;

export const DeleteIcon = styled(Delete)`
  color: #ff4d4d;
`;
