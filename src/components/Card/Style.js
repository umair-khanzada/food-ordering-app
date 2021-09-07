import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: '8px';
  max-width: ${(props) => props.maxwidth};
  min-width: ${(props) => props.minwidth};
  textAlign: : ${(props) => props.textalign};
  ${({ theme }) => `
   &:hover {
        border-radius: ${theme.shape.borderRadius};
      },      
  `};
`;

export default StyledCard;
