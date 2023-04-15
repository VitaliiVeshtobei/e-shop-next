import styled from 'styled-components';

export const ListStyled = styled('ul')`
  display: flex;
  align-items: center;
  text-align: center;
  height: 60px;
  background-color: ${(p) => p.theme.colors.accentBg};
  color: ${(p) => p.theme.colors.lightText};
  li {
    flex-basis: 25%;
  }
`;
