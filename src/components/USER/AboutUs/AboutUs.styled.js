import styled from 'styled-components';

export const Container = styled('div')`
  color: ${(p) => p.theme.colors.darkText};
  h2 {
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 30px;
  }
`;

export const ListText = styled('ul')`
  font-size: 14px;
  font-weight: 400px;
  line-height: 28px;
  color: ${(p) => p.theme.colors.darkText};
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
