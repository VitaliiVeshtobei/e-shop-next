import styled from 'styled-components';
import DEVICE from '../../../../constants/deviceSize';
import Link from 'next/link';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70px;
  background-color: ${(p) => p.theme.colors.accentBg};
`;
export const LogoContainer = styled('div')`
  @media ${DEVICE.mobile} {
    display: none;
  }
  @media ${DEVICE.tablet} {
    display: block;
  }
`;

export const FormStyled = styled('form')`
  position: relative;
`;
export const InputStyled = styled('input')`
  width: 438px;
  height: 56px;
  padding: 17px 25px;
  border-radius: 20px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  :focus {
    outline: none;
    border: none;
  }
  @media ${DEVICE.mobile} {
    max-width: 250px;
    height: 45px;
  }
  @media ${DEVICE.tablet} {
    max-width: 360px;
  }
  @media ${DEVICE.laptop} {
    max-width: 438px;
  }
`;

export const ButtonStyled = styled('button')`
  position: absolute;
  right: 0px;
  width: 132px;
  height: 100%;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 20px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${(p) => p.theme.colors.lightText};
  transition: ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
  @media ${DEVICE.mobile} {
    width: 70px;
  }
  @media ${DEVICE.tablet} {
    width: 100px;
  }
  @media ${DEVICE.laptop} {
    width: 132px;
  }
`;

export const CartContainer = styled('div')`
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
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
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  width: 18px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
