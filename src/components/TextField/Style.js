import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  width: ${(props) => props.width};
  & label.Mui-focused {
    color: #993333;
  }
`;

export default StyledTextField;
