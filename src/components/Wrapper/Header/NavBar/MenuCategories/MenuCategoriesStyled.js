import styled from 'styled-components';
import DEVICE from '../../../../../constants/deviceSize';
import Link from 'next/link';

export const ListCategoriesContainer = styled('div')`
  z-index: 1000;
  position: absolute;
  top: 70px;
  overflow: hidden;
  box-sizing: border-box;

  animation-name: categories;
  animation-duration: 300ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes categories {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @media ${DEVICE.mobile} {
    min-width: 320px;
  }
  @media ${DEVICE.tablet} {
    width: 375px;
  }
  @media ${DEVICE.laptop} {
    width: 375px;
  }
`;

export const ListCategories = styled('ul')`
  font-size: 20px;
  background-color: ${(p) => p.theme.colors.navbar};
  padding: 30px;

  border-top: none;
`;

export const ItemCategories = styled('li')`
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const LinkStyled = styled(Link)`
  position: relative;
  color: ${(p) => p.theme.colors.darkText};
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
