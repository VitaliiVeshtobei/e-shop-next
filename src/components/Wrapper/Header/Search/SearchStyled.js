import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 70px;

  background-color: ${(p) => p.theme.colors.accentBg};
  @media ${DEVICE.mobile} {
    gap: 8px;
    padding: 0 8px;
  }
  @media ${DEVICE.tablet} {
    padding: 0 16px;
    gap: 16px;
  }
  @media ${DEVICE.laptop} {
    padding: 0 32px;
    gap: 32px;
  }
`;
