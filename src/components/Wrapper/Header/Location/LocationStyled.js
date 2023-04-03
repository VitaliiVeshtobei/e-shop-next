import styled from 'styled-components';
import DEVICE from '../../../../constants/deviceSize';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 70px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(p) => p.theme.colors.darkText};
  @media ${DEVICE.mobile} {
    height: 50px;
    padding: 20px;
  }
  @media ${DEVICE.tablet} {
  }
  p span {
    @media ${DEVICE.mobile} {
      display: none;
    }
    @media ${DEVICE.tablet} {
      display: block;
    }
    @media ${DEVICE.laptop} {
      display: inline;
    }
  }
`;

export const ListLocation = styled('ul')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  span {
    @media ${DEVICE.mobile} {
      display: none;
    }
    @media ${DEVICE.tablet} {
      display: block;
    }
    /* @media ${DEVICE.laptop} {
      display: inline;
    } */
  }
`;

export const ItemLocation = styled('li')`
  display: flex;
  align-items: center;
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  :not(:first-child) {
    margin-left: 27px;
  }
`;

export const LocationBtn = styled('button')`
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: inherit;
  line-height: 1.5;
  font-size: 14px;
  color: ${(p) => p.theme.colors.darkText};
  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
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
`;
