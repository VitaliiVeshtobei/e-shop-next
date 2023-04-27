import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.lightText};
  padding: 35px 20px;

  @media ${tablet} {
    height: ${(p) => {
      if (p.modalType === 'login') {
        return '387px';
      } else return '640px';
    }};
    width: 640px;
    border-radius: 8px;
    padding: 20px 20px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1px;
  outline: none;
  border: transparent;
  background-color: transparent;
  transition: transform ${(p) => p.theme.transition}, fill ${(p) => p.theme.transition};

  & svg {
    padding: 0;
    width: 25px;
    height: 25px;
    transition: fill ${(p) => p.theme.transition};
    fill: ${(p) => p.theme.colors.border};
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
    svg {
      fill: ${(p) => p.theme.colors.scndDarkText};
    }
  }

  @media ${tablet} {
    top: 10px;
    right: 10px;
  }
`;
