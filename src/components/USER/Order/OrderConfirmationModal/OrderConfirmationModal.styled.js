import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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

export const ModalContainerConfirmationOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  width: calc(100% / 2);
`;

export const TextModalConfirmation = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 20px;
`;
