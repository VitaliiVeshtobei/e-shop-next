import DEVICE from '@/constants/deviceSize';
import Link from 'next/link';
import styled from 'styled-components';

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
export const Container = styled('div')`
  width: 320px;
  background-color: ${(p) => p.theme.colors.navbar};

  @media ${DEVICE.mobile} {
    padding: 8px 8px;
  }
  @media ${DEVICE.tablet} {
    padding: 12px 16px;
  }
  @media ${DEVICE.laptop} {
    padding: 16px 32px;
  }
`;
export const MainList = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MainListItem = styled('li')`
  button {
    color: ${(p) => p.theme.colors.darkText};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  }
  button:hover,
  button:focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const ContainerSvg = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(p) => p.theme.colors.accentBg};
  border-radius: 8px;
  svg {
    width: 24px;
    height: 24px;
    stroke: ${(p) => p.theme.colors.accent};
  }
`;
export const ContainerText = styled('div')`
  display: flex;

  align-items: center;

  height: 40px;

  border-top: 1px solid #e9e9e9;
  h3 {
    font-size: 14px;
    color: #797878;
  }
  @media ${DEVICE.mobile} {
    margin-top: 8px;
  }
  @media ${DEVICE.tablet} {
    margin-top: 12px;
  }
  @media ${DEVICE.laptop} {
    margin-top: 16px;
  }
`;
export const InfoList = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const InfoListItem = styled('li')`
  font-size: 14px;
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const LinkStyled = styled(Link)`
  color: ${(p) => p.theme.colors.darkText};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: ${(p) => p.theme.line.position};
    bottom: ${(p) => p.theme.line.bottom};
    left: ${(p) => p.theme.line.left};
    transition: ${(p) => p.theme.line.transition};
    width: ${(p) => (p.path === p.href ? '100%' : p.theme.line.width)};
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
