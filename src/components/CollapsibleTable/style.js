import { TableHead, TableContainer, CircularProgress } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import styled from 'styled-components';
export const CollapseTableHead = styled(TableHead)`
  background-color: #00b3e3;
  height: 40px;
  & .MuiTableCell-head {
    font-weight: bold;
  }
`;
export const IconContainer = styled.div`
  flex-shrink: 0;
`;
export const CollapseTableContainer = styled(TableContainer)`
  width: 80vw;
  max-height: 95%;
  & .MuiTableCell-root {
    padding: 0px 14px;
    line-height: 55px;
  }
  margin: auto;
`;
export const DeleteIcon = styled(Delete)`
  color: #00b3e3;
`;
export const TableHeader = styled(TableCell)`
  font-size: 16px;
  color: white;
`;

export const DeleteProgress = styled(CircularProgress)`
  margin-left: 10px;
  margin-top: 10px;
`;
export const OrderItems = styled(TableCell)`
  font-weight: bold;
`;
