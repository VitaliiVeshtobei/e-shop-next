import styled from 'styled-components';
import DEVICE from '../../../../../constants/deviceSize';
import Link from 'next/link';

export const ListCategoriesContainer = styled('div')`
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
    width: 100%;
  }
  @media ${DEVICE.tablet} {
    width: calc(100% - 50px);
  }
  @media ${DEVICE.laptop} {
    width: calc(100% - 100px);
  }
`;

export const ListCategories = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* gap: 30px; */
  font-size: 20px;
  background-color: ${(p) => p.theme.colors.navbar};
  padding: 30px;

  border-top: none;
  @media ${DEVICE.mobile} {
    flex-direction: column;
    gap: 15px;
  }
  @media ${DEVICE.tablet} {
    flex-direction: row;
    gap: 20px;
  }
  @media ${DEVICE.laptop} {
    gap: 30px;
  }
`;

export const ItemCategories = styled('li')`
  /* flex-basis: 33%; */

  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  @media ${DEVICE.mobile} {
    width: 100%;
  }
  @media ${DEVICE.tablet} {
    width: calc(100% / 3);
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

export const Backdrop = styled.div`
  z-index: 999;
  position: absolute;
  left: 0;
  height: 100vh;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  animation-name: backdrop;
  animation-duration: 300ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes backdrop {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
