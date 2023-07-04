import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
`;

export const CategoriesListStyled = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonChangeView = styled.button`
  svg {
    transition: transform ${(p) => p.theme.transition};
    fill: ${(p) => p.theme.colors.accentBg};
    width: 34px;
    height: 34px;
  }
  &:hover svg {
    filter: drop-shadow(1px 1px 2px ${(p) => p.theme.colors.accent});
    transform: scale(1.1);
  }
`;
