import { TableHead, TableContainer } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import styled from 'styled-components';
export const CustomTableHead = styled(TableHead)`
  color: white;
  background-color: #00b3e3;
  & .MuiTableCell-head {
    font-weight: bold;
  }
`;
export const IconContainer = styled.div`
  flex-shrink: 0;
`;

export const CustomTableContainer = styled(TableContainer)`
  width: ${({ tablewidth }) => tablewidth};
  & .MuiTableCell-root {
    padding: 5px 14px;
  }
  margin: auto;
`;
export const DeleteIcon = styled(Delete)`
  color: #00b3e3;
`;
