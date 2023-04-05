import styled from 'styled-components';

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
  width: 500px;
  max-height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 40px 20px;

  animation-name: modalOpen;
  animation-duration: 300ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @keyframes modalOpen {
    0% {
      opacity: 0.5;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    max-width: 320px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    max-width: 600px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  padding: 1px;

  border: transparent;
  border-radius: 50%;
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
`;
