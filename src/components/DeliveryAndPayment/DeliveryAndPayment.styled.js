import styled from 'styled-components';

export const Title = styled('h2')`
  text-align: center;
  margin-bottom: 40px;
  color: ${(p) => p.theme.colors.darkText};
`;

export const ListText = styled('ul')`
  display: flex;
  gap: 30px;
  font-size: 14px;
  font-weight: 400px;
  line-height: 28px;
  color: ${(p) => p.theme.colors.darkText};
  h3 {
    margin-bottom: 15px;
  }
  ul > li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ListItem = styled('li')`
  svg {
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 150px;
    margin-bottom: 30px;
  }
  &:first-child {
    svg {
      stroke: ${(p) => p.theme.colors.accent};
    }
  }
  &:not(:first-child) {
    svg {
      fill: ${(p) => p.theme.colors.accent};
    }
  }
`;
