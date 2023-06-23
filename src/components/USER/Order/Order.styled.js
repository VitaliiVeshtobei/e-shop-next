import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 970px) {
    display: flex;
    justify-content: space-around;
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
