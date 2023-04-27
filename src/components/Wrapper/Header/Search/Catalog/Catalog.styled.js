import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const ButtonCategories = styled('button')`
  display: none;
  border: none;
  border-radius: 8px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  padding: 0 16px;
  cursor: pointer;
  transition: ${(p) => p.theme.transition};
  &:hover {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
  @media ${DEVICE.tablet} {
    display: block;
  }
`;
