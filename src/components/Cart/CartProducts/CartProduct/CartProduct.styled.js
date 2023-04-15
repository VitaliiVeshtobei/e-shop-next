import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 25px 0;
  &::before {
    position: absolute;
    top: 0;
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: #c3c3c3;
  }
`;

export const ProductContainer = styled('div')`
  display: flex;
  gap: 10px;
  flex-basis: 25%;
  p {
    margin: auto 0;
    font-size: 13px;
  }
`;
export const Price = styled('p')`
  flex-basis: 25%;
`;
export const QuantityContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-basis: 25%;
`;

export const Quantity = styled('div')`
  padding: 10px 20px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
`;
export const Sum = styled('p')`
  flex-basis: 25%;
`;
