import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';

export const Container = styled('div')`
  @media ${DEVICE.mobile} {
    display: block;
  }
  @media ${DEVICE.laptop} {
    display: flex;
    gap: 20px;
  }
`;
