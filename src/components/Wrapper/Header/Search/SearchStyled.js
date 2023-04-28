import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 70px;

  background-color: ${(p) => p.theme.colors.accentBg};
  @media ${DEVICE.mobile} {
    gap: 8px;
    padding: 0 8px;
  }
  @media ${DEVICE.tablet} {
    padding: 0 16px;
    gap: 16px;
  }
  @media ${DEVICE.laptop} {
    padding: 0 32px;
    gap: 32px;
  }
`;

export const UserBtn = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
  line-height: 21px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(p) => p.theme.colors.lightText};
  transition: transform ${(p) => p.theme.transition};

  svg {
    height: 24px;
    width: 24px;
    margin-right: 12px;
  }

  span {
    display: none;
    @media ${DEVICE.tablet} {
      display: block;
    }
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
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
