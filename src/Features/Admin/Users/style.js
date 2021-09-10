import { Delete } from '@material-ui/icons';
import styled from 'styled-components';
export const UsersTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 25px 10px 25px;
  padding: 5px 80px 10px 40px;
`;

export const UsersTitle = styled.div`
  color: grey;
  font-size: 25px;
  padding-left: 20px;
  font-weight: 500;
`;

export const DeleteIcon = styled(Delete)`
  color: #ff4d4d;
`;
