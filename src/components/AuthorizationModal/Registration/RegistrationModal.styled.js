import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { tablet } = DEVICE;

export const LoginBtn = styled.button`
  display: block;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  color: ${(p) => p.theme.colors.darkText};
  margin-bottom: 24px;
  transition: color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
  @media ${tablet} {
    text-align: start;
    margin-left: 100px;
    margin-bottom: 0;
  }
`;
