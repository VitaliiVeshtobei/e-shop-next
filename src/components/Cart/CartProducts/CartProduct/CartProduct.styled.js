import styled from 'styled-components';
import DEVICE from '../../../../constants/deviceSize';
import Link from 'next/link';

export const Container = styled('div')`
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
  @media ${DEVICE.mobile} {
    display: block;
  }
  @media ${DEVICE.tablet} {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export const ProductContainer = styled(Link)`
  display: flex;
  gap: 10px;
  flex-basis: 40%;
  p {
    margin: auto 0;
    font-size: 13px;
    color: ${(p) => p.theme.colors.accentBg};
  }
`;
export const Price = styled('p')`
  flex-basis: 33%;
  color: #2f2f2f;
  @media ${DEVICE.mobile} {
    display: none;
  }
  @media ${DEVICE.tablet} {
    display: block;
  }
`;
export const QuantityContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-basis: 33%;
`;

export const Quantity = styled('div')`
  padding: 10px 20px;
  border: 1px solid #c3c3c3;
  border-radius: 10px;
  color: #2f2f2f;
`;
export const Sum = styled('p')`
  color: #2f2f2f;
  @media ${DEVICE.mobile} {
    margin-left: 25px;
  }
  @media ${DEVICE.tablet} {
    margin-left: 0px;
    flex-basis: 33%;
  }
`;
export const CloseBtn = styled('button')`
  position: absolute;
  display: flex;
  align-items: center;
  right: 10px;
  cursor: pointer;
  border: none;
  background: none;
  svg {
    height: 24px;
    width: 24px;
    fill: #d2d2d2;
    transition: fill ${(p) => p.theme.transition};
    &:hover {
      fill: #3e77aa;
    }
  }
`;
export const PlusBtn = styled('button')`
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

export const PriceContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-grow: 1;
  @media ${DEVICE.mobile} {
    margin-top: 25px;
  }
  @media ${DEVICE.tablet} {
    margin-top: 0px;
  }
`;
