import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  margin-bottom: 40px;
  padding-left: 10px;
  text-decoration: none;
  border-radius: 0px;
  color: #717271;
  font-size: 20px;
  font-weight: 200;
  width: 100%;
  display: flex;
  justify-content: left;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    background-color: #00b3e3;
    color: white;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-right: 20px;
`;
