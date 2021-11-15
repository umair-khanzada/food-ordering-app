import { Card, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const CardRoot = styled(Card)`
  border-radius: 0px;
  position: relative;
  display: flex;
  padding: 0px;
  margin: 20px;
  flex-direction: column;
  width: 230px;
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
  padding: 5px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
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
  padding: 7px;
  height: 170px;
  width: 250px;
  @media (max-width: 768px) {
    padding: 7px;
    height: 110px;
    width: 100%;
  }
`;
export const ItemPrice = styled.div``;
export const DetailsContainer = styled.div`
  display: flex;
  padding-bottom: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
