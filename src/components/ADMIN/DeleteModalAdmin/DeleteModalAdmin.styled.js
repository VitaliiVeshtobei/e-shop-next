import styled from 'styled-components';

export const BackdropDeleteModalAdmin = styled.div`
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

export const DeleteModalContainerAdmin = styled.div`
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

export const TextDeleteModalAdmin = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 20px;
`;

export const ButtonsContainerDeleteModal = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

export const DeleteModalAdminBtnStyled = styled.button`
  padding: 8px;
  width: 50px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.accentBg};
  color: ${(p) => p.theme.colors.accent};
  transition: ${(p) => p.theme.transition};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  &:hover,
  &:focus {
    background-color: ${(p) => (p.disabled ? p.theme.colors.accentBg : p.theme.colors.accent)};
    color: ${(p) => (p.disabled ? p.theme.colors.accent : p.theme.colors.accentBg)};
  }
`;
