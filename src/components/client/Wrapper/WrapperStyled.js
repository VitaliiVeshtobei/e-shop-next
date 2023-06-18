import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
export const Container = styled('main')`
  flex: 1;
  @media ${DEVICE.mobile} {
    padding-top: 5px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 35px;
  }
  @media ${DEVICE.tablet} {
    padding-top: 15px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 55px;
  }
  @media ${DEVICE.laptop} {
    padding-top: 30px;
    padding-left: 63px;
    padding-right: 63px;
    padding-bottom: 75px;
  }
`;

export const Box = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
