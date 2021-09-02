import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  color: black;

  width: ${(props) => props.width};
  ${({ theme }) => `
   & label.Mui-focused {
    color: ${theme.palette.secondary.main};
  }
  `};
`;

export default StyledTextField;
