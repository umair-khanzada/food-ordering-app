import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';

export const StyledBox = styled(Box)`
  position: relative;
  border: 5px solid black;
  border-radius: 10px;
  margin-top: 35px;
  margin-left: 20px;
  padding: 10px;
`;

export const StyledImageTag = styled.img`
  background-size: contain;
  padding: 0;
  margin: 0;
`;

export const StyledGrid = styled(Grid)`
  padding: 50px;
`;

export const StyledDivContainer = styled.div`
  border: 3px solid #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const StyledDivColumn = styled.div`
  float: ${(props) => props.float};
  width: ${(props) => props.width};
`;

export const StyledDivContent = styled.div`
  padding: 10px;
`;

export const StyledDivRow = styled.div`
  padding: 10px;
  background: #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

export const StyledDotSpan = styled.span`
  background: ${(props) => props.background};
  margin-top: 4px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
`;

export const StyledInputText = styled.input`
  width: 100%;
  border-radius: 3px;
  border: none;
  background-color: white;
  margin-top: -8px;
  height: 25px;
  color: #666;
  padding: 5px;
`;

export const StyledBarSpan = styled.span`
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
`;
