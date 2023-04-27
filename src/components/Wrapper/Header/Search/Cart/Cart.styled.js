import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
import Link from 'next/link';

export const CartContainer = styled('div')`
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  @media ${DEVICE.mobile} {
    p {
      display: none;
    }
  }
  @media ${DEVICE.tablet} {
    p {
      display: block;
    }
  }
`;

export const LinkStyled = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.lightText};
  position: relative;
  svg {
    color: 'white';
    height: 24px;
    width: 24px;
  }

  &::after {
    content: '';
    position: ${(p) => p.theme.line.position};
    bottom: ${(p) => p.theme.line.bottom};
    left: ${(p) => p.theme.line.left};
    transition: ${(p) => p.theme.line.transition};
    width: ${(p) => p.theme.line.width};
    height: ${(p) => p.theme.line.height};
    background-color: ${(p) => p.theme.line.bgColor};
  }

  &:hover::after {
    width: ${(p) => p.theme.lineHover.width};
  }
  &:focus::after {
    width: ${(p) => p.theme.lineHover.width};
  }

  span {
    @media ${DEVICE.mobile} {
      display: none;
    }
    @media ${DEVICE.tablet} {
      display: block;
    }
  }
`;

export const CartCount = styled.div`
  display: ${(p) => (!p.quantity ? 'none' : 'flex')};
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  width: 18px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;

  justify-content: center;
  align-items: center;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;
