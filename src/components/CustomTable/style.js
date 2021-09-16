import { TableHead, TableContainer, TableCell } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import styled from 'styled-components';
export const CustomTableHead = styled(TableHead)`
  background-color: #00b3e3;
  height: 40px;
  & .MuiTableCell-head {
    font-weight: bold;
  }
`;
export const TableHeader = styled(TableCell)`
  font-size: 16px;
  color: white;
`;
export const IconContainer = styled.div`
  flex-shrink: 0;
`;

export const CustomTableContainer = styled(TableContainer)`
  width: ${({ tablewidth }) => tablewidth};
  & .MuiTableCell-root {
    padding: 5px 14px;
    line-height: 3px;
  }
  margin: auto;
`;
export const DeleteIcon = styled(Delete)`
  color: #00b3e3;
`;
