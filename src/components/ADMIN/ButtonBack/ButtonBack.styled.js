import styled from 'styled-components';

export const Button = styled.button`
  color: ${(p) => p.theme.colors.accentBg};
  font-size: 20px;
  font-weight: 700;
  transition: color ${(p) => p.theme.transition};

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
