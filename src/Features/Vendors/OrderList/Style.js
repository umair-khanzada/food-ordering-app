import { Delete } from '@material-ui/icons';
import styled from 'styled-components';
export const OrdersHistoryTitleContainer = styled.div`
  display: flex;

  justify-content: space-between;

  margin: 20px auto;
  width: 80%;
  padding: 20px 0px;
`;

export const OrdersHistoryTitle = styled.div`
  color: grey;

  font-size: 25px;

  font-weight: 500;
`;

export const DeleteIcon = styled(Delete)`
  color: #ff4d4d;
`;
