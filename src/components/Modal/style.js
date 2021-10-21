import { DialogContentText } from '@material-ui/core';
import styled from 'styled-components';

export const DialogContainer = styled.div`
  padding: 20px;
  margin: 20px;
  position: absolute;
  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px;
  }
`;
export const ContentTextConatiner = styled(DialogContentText)`
  margin: 14px;
  font-size: 20px;
  @media (max-width: 768px) {
    margin: 5px;
    font-size: 16px;
  }
`;
