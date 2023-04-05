import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import DEVICE from '../../../../constants/deviceSize';
import Link from 'next/link';

export const Container = styled('div')`
  display: flex;

  align-items: center;

  height: 70px;
  background-color: ${(p) => p.theme.colors.navbar};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  @media ${DEVICE.mobile} {
    gap: 0;
    padding: 0;
    justify-content: space-between;
  }
  @media ${DEVICE.tablet} {
    justify-content: space-evenly;
    button:nth-last-child(2) {
      display: none;
    }
  }
  @media ${DEVICE.laptop} {
    gap: 100px;
    padding: 0 63px;
    justify-content: start;
  }
`;

export const ButtonCategories = styled('button')`
  border: none;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  padding: 23px;
  cursor: pointer;
  transition: ${(p) => p.theme.transition};
  &:hover {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
`;
export const ListContainer = styled('ul')`
  display: flex;
  align-items: center;

  @media ${DEVICE.mobile} {
    display: none;
  }
  @media ${DEVICE.tablet} {
    display: flex;
    gap: 15px;
  }
  @media ${DEVICE.laptop} {
    display: flex;
    gap: 30px;
  }
`;

export const ItemContainer = styled('li')`
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const LinkStyled = styled(Link)`
  color: ${(p) => p.theme.colors.darkText};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  cursor: pointer;

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
