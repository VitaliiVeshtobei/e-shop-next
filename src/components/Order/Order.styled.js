import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 970px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Wrap = styled.div`
  @media screen and (min-width: 970px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  text-align: center;

  font-size: 22px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.darkText};
  margin-bottom: 40px;
`;
