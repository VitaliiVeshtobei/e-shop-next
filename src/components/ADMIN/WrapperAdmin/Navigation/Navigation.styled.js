import styled from 'styled-components';
import DEVICE from '../../../../constants/deviceSize';

export const Wrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;

  background-color: ${(p) => p.theme.colors.scndDarkText};
  padding: 10px;

  @media ${DEVICE.tablet} {
    position: static;
    background-color: transparent;
    padding: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background-color: ${(p) => (p.active === p.id ? p.theme.colors.navbar : p.theme.colors.accent)};
  transition: transform ${(p) => p.theme.transition}, background-color ${(p) => p.theme.transition},
    color ${(p) => p.theme.transition};
  padding: 5px;
  font-size: 14px;
  font-weight: 700;

  ${(p) =>
    p.active === p.id
      ? ` width: 260px;
      color:#000;`
      : ''}

  &:hover {
    background-color: ${(p) => (p.active === p.id ? p.theme.colors.navbar : p.theme.colors.waiting)};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
export const Backdrop = styled.div`
  width: calc(100vw - 40px);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 1000;
`;
