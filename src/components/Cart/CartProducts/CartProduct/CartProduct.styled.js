import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
export const Container = styled('div')`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 25px 0;
  &::before {
    position: absolute;
    bottom: 0;
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
  flex-basis: 40%;
  p {
    margin: auto 0;
    font-size: 13px;
  }
`;
export const Price = styled('p')`
  flex-basis: 20%;
`;
export const QuantityContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-basis: 20%;
`;

export const Quantity = styled('div')`
  padding: 10px 20px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
`;
export const Sum = styled('p')`
  flex-basis: 20%;
`;
export const PlusBtn = styled('button')`
  width: 40px;
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #3e77aa;
    width: 24px;
    height: 24px;
  }
`;
export const MinusBtn = styled('button')`
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${(p) => (p.quantity === 1 ? '#d2d2d2' : '#3e77aa')};
    width: 24px;
    height: 24px;
  }
`;
