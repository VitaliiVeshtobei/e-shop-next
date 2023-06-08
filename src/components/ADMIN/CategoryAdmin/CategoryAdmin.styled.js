import styled from 'styled-components';

export const CreateBtnStyled = styled.button`
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

export const OptionBtnStyled = styled.button`
  padding: 5px;
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

export const TableStyled = styled.table`
  margin-top: 12px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px; /* Відступ між рядками */

  tr,
  td {
    padding: 5px;
    border: 1px solid grey;
  }
`;

export const ListButtonsStyled = styled.ul`
  display: flex;
  gap: 8px;
`;
