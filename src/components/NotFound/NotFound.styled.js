import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(p) => p.theme.colors.darkText};
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${(p) => p.theme.colors.darkText};
`;
