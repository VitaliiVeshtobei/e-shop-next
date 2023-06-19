import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { tablet } = DEVICE;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  overflow: hidden;
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
export const Modal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.smoke};
  border-radius: 20px;

  img {
    border-radius: 20px;
    width: 310px;
    height: 310px;

    @media screen and (min-width: 410px) {
      width: 390px;
      height: 390px;
    }

    @media screen and (min-width: 550px) {
      width: 450px;
      height: 450px;
    }

    @media ${tablet} {
      width: 640px;
      height: 640px;
    }
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
    width: 18px;
    height: 18px;
    transition: fill ${(p) => p.theme.transition};
    fill: ${(p) => p.theme.colors.border};

    @media screen and (min-width: 550px) {
      width: 25px;
      height: 25px;
    }
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
    svg {
      fill: ${(p) => p.theme.colors.scndDarkText};
    }
  }
`;
