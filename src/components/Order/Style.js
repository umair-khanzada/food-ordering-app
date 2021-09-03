import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 70px;
  margin-bottom: 8px;
  .food-description {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }
`;
export const DivMain = styled.div`
  display: flex;
  align-items: center;
`;

export const NameofFood = styled.div`
  width: '85px';
`;
export const Price = styled.div`
  fontweight: 'bold';
  width: '100px';
  marginleft: '10px';
`;
const Li = styled.li`
  list-style-type: none;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const OrderText = styled.div`
  margin-left: 99px;
  margin-bottom: 8px;
`;

export const H2 = styled.h2`
  text-align: center;
`;
export const Span = styled.span`
  width: 25px;
  text-align: center;
  height: 25px;
`;
export const Img = styled.img`
  width: 100px;
  height: 74px;
`;
export const Icon = styled.div`
  &: hover {
    cursor: pointer;
  }
`;
export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const IncrementI = styled.i`
  color: green;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const PriceSpan = styled.span`
  fontweight: bold;
`;
export const DecrementI = styled(IncrementI)`
  font-size: 20px;
  color: rgb(227, 66, 52);
  &:hover {
    cursor: pointer;
  }
`;
