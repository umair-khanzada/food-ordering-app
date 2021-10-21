import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const CardRoot = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-left: 25px;
  box-shadow: 0px 0px 10px lightgrey;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 60px;
    .MuiGrid-spacing-xs-3 {
      padding: 0px;
    }
  }
`;

export const FoodTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Content = styled(CardContent)`
  padding: 0px;
  margin-left: 18px;
`;
export const HeaderCard = styled(CardHeader)`
padding: 0px
margin-left: 18px

`;
export const ResturantName = styled(Typography)`
  margin-left: 4px;
  font-weight: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ImageDiv = styled.img`
  border: 100px;
  border-radius: 10px;
  padding: 14px;
  height: 100%;
  width: 100%;
`;
export const ItemPrice = styled.div`
  margin-left: 9vh;
  margin-top: 10px;
  @media (max-width: 768px) {
    margin-left: 12px;
  }
`;
export const ControlGrid = styled(Grid)`
  margin-top: 50px;
`;
export const InsideContent = styled.div`
  display: flex;
`;
