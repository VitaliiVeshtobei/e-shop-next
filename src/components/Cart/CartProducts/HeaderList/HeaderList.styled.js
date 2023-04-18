import styled from 'styled-components';

export const ListStyled = styled('ul')`
  display: flex;
  align-items: center;
  text-align: center;
  height: 60px;
  background-color: ${(p) => p.theme.colors.accentBg};
  color: ${(p) => p.theme.colors.lightText};
  li:first-child {
    flex-basis: 40%;
  }
  li:not(:first-child) {
    flex-basis: 20%;
  }
`;
