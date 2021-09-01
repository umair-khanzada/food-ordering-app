import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: '8px';
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  ${({ theme }) => `
   &:hover {
        border-radius: ${theme.shape.borderRadius};
      },      
  `};
`;

export default StyledCard;
