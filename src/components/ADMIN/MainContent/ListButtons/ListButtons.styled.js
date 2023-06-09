import Image from 'next/image';
import styled from 'styled-components';

export const OptionBtnStyled = styled.button`
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.accentBg};
  color: ${(p) => p.theme.colors.accent};
  transition: ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.accentBg};
  }
`;

export const ListButtonsStyled = styled.ul`
  display: flex;
  gap: 8px;
`;
