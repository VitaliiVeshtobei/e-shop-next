import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';

export const LogoContainer = styled('div')`
  @media ${DEVICE.mobile} {
    display: none;
  }
  @media ${DEVICE.tablet} {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    font-size: 28px;
    color: ${(p) => p.theme.colors.lightText};
  }
`;
