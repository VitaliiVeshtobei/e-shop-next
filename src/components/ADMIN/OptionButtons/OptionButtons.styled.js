import styled from 'styled-components';

export const OptionBtnStyled = styled.button`
  padding: 8px;
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

export const ListButtonsStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
