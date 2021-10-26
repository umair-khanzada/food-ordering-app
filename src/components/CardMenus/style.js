import { Card, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const CardRoot = styled(Card)`
  display: flex;
  padding: 2px;
  margin: 20px;
  flex-direction: column;
  width: 260px;
  box-shadow: 5px 5px 10px 2px grey;
  @media (max-width: 768px) {
    width: 160px;
    margin: 10px;
  }
  & .MuiCardHeader-root {
    padding: 5px;
  }
`;

export const FoodTitle = styled(Typography)`
  text-align: center;
  font-size: 25px;
  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 20px;
  }
`;
export const Content = styled.div`
  padding: 10px 5px;
  width: 100%;
  text-align: center;
`;

export const Dishes = styled.div`
  margin: 20px 10px;
  display: flex;

  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;
export const ImageDiv = styled.img`
  padding: 10px;
  height: 200px;
  width: 300px;
  @media (max-width: 768px) {
    padding: 7px;
    height: 110px;
    width: 100%;
  }
`;
export const ItemPrice = styled.div``;
export const DetailsContainer = styled.div`
  display: flex;s
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const InsideContent = styled.div`
  display: flex;
`;
