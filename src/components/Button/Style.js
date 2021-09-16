import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-size: ${({ fontSize }) => fontSize};
  letter-spacing: 2px;
  margin-bottom: 10px;
  max-width: ${({ maxwidth }) => maxwidth};
  min-width: ${({ minwidth }) => minwidth};
  background-color: #00b3e3;
  color: white;
  ${({ theme }) => `
  
   ${theme.breakpoints.up('sm')} {
  
  }
  `};
`;

export default StyledButton;
