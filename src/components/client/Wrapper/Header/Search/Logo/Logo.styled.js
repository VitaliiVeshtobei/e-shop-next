import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';

export const LogoContainer = styled('div')`
  height: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    font-size: 28px;
    color: ${(p) => p.theme.colors.lightText};
    @media ${DEVICE.mobile} {
      display: none;
    }
    @media ${DEVICE.tablet} {
      display: block;
    }
  }
`;
