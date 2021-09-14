import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-size: ${({ fontSize }) => fontSize};
  letter-spacing: 2px;
  margin-bottom: 10px;
  max-width: ${({ maxwidth }) => maxwidth};
  min-width: ${({ minwidth }) => minwidth};
  color: white;
  ${({ theme }) => `
  background-color: ${theme.palette.primary.main};
  &:hover {
    background-color: white;
    color: #00B3E3;
  }
   ${theme.breakpoints.up('sm')} {
  
  }
  `};
`;

export default StyledButton;
