import { TableHead, TableContainer, CircularProgress } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import SearchBar from 'material-ui-search-bar';
import styled from 'styled-components';
export const CustomTableHead = styled(TableHead)`
  background-color: #00b3e3;
  height: 40px;
  & .MuiTableCell-head {
    font-weight: bold;
  }
`;
export const IconContainer = styled.div`
  flex-shrink: 0;
`;
export const CustomTableContainer = styled(TableContainer)`
  max-height: 100%;
  width: ${({ tablewidth }) => tablewidth};
  & .MuiTableCell-root {
    padding: 5px 14px;
    line-height: 38px;
  }
  & .MuiTable-root {
    border-collapse: unset;
  }
  @media (max-width: 768px) {
    & .MuiTableCell-root {
      padding: 5px 11px;
      line-height: 15px;
    }
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
export const TableCellContainer = styled(TableCell)`
  width: ${({ cellwidth }) => cellwidth};
`;
export const DeleteProgress = styled(CircularProgress)`
  margin-left: 10px;
  margin-top: 10px;
`;
export const EditDeletCell = styled(TableCell)`
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const BalanceSheetFilter = styled(SearchBar)`
  margin: 10px 5%;
  width: 34%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
