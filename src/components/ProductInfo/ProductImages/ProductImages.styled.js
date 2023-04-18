import styled from 'styled-components';

export const MainImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
`;
