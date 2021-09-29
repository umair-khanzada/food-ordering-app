import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const CardRoot = styled(Card)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px grey;
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

export const ImageDiv = styled.img`
  border: 100px;
  border-radius: 10px;
  padding: 14px;
`;
export const ItemPrice = styled.div`
  margin-left: 10vh;
  margin-top: 2vh;
`;
export const ControlGrid = styled(Grid)`
  padding: 20px;
  margin-top: 50px;
`;
export const InsideContent = styled.div`
  display: flex;
`;
