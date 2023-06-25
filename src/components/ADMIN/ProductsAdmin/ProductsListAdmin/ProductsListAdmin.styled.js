import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  width: 300px;
  height: 400px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
`;
