import styled from 'styled-components';

export const BurgerButton = styled('button')`
  width: 40px;
  height: 40px;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    color: ${(p) => p.theme.colors.accent};
  }
`;
