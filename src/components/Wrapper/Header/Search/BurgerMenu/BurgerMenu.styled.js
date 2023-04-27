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
