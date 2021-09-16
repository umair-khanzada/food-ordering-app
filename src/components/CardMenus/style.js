import { Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled(Card)`
display: flex;
flex-direction: 'column;
box-shadow: 0 0 20px lightgrey;
`;
export const Media = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;
export const FoodTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 10px;
`;
export const Content = styled(CardContent)`
  padding: '0px';
  margin-left: '18px';
`;
export const HeaderCard = styled(CardHeader)`
padding: 0px
margin-left: 18px
`;
export const Price = styled(Typography)`
  padding-top: 20px;
  padding-left: 40px;
  font-size: 18px;
  font-weight: 700;
`;
export const Image = styled.img`
  border: 100px;
  padding: 20px;
  border-radius: 20px;
  boxshadow: 10px 10px F0F0F0;
  width: 20px;
`;
