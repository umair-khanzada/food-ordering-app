import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const CardRoot = styled(Card)`
  display: flex;
  flex-direction: column;

  width: 280px;
  margin-top: -40px;
  box-shadow: 0px 0px 10px lightgrey;
`;

export const FoodTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 10px;
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
`;

export const ImageDiv = styled.img`
  border: 100px;
  border-radius: 10px;
  padding: 14px;
  height: 200px;
  width: 300px;
`;
export const ItemPrice = styled.div`
  margin-left: 10vh;
  margin-top: 10px;
`;
export const ControlGrid = styled(Grid)`
  padding: 20px;
  margin-top: 50px;
`;
export const InsideContent = styled.div`
  display: flex;
`;
