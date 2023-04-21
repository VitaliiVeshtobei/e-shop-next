import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled('ul')`
  height: 76px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 63px;
  li {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: ${(p) => p.theme.colors.darkText};
  }
`;
export const LinkStyled = styled(Link)`
  color: ${(p) => p.theme.colors.scndDarkText};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
