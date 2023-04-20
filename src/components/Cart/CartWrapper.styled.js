import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';

export const Container = styled('div')`
  display: flex;
  gap: 20px;
  @media ${DEVICE.mobile} {
    display: block;
  }
`;
