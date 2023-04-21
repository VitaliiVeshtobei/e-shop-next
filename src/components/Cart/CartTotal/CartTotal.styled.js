import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';

export const Container = styled('div')`
  @media ${DEVICE.mobile} {
    width: 100%;
    margin-top: 25px;
  }
  @media ${DEVICE.laptop} {
    flex-basis: 30%;
    margin-top: 0px;
  }
`;
export const HeadContainer = styled('div')`
  display: flex;
  align-items: center;

  justify-content: center;
  height: 60px;
  background-color: ${(p) => p.theme.colors.accentBg};
  color: ${(p) => p.theme.colors.lightText};
`;
export const TotalSum = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  margin: 0 35px;
  font-weight: 500;
  font-size: 19.68px;
  line-height: 25px;
  color: #232323;
  &::before {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: #c3c3c3;
  }
`;

export const OrderBtn = styled('button')`
  cursor: pointer;
  margin: 40px auto 0 auto;
  display: block;
  border: none;
  border-radius: 8px;
  padding: 13px 72px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  transition: ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
`;
