import { Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  max-width: ${(props) => props.maxwidth};
  min-width: ${(props) => props.minwidth};
  background-color: #e91e63;
  color: white;
  ${({ theme }) => `
  
   &:hover {
      },
  `};
`;

export default StyledButton;
