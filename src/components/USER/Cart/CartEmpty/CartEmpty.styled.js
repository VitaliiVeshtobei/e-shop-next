import styled from 'styled-components';
import DEVICE from '../../../../constants/deviceSize';

export const Container = styled('div')`
  @media ${DEVICE.mobile} {
    display: block;
    img {
      width: 250px;
      height: 200px;
      margin: 0 auto;
    }
  }
  @media ${DEVICE.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 400px;
      height: 250px;
      margin: 0 auto;
    }
  }
  @media ${DEVICE.laptop} {
    img {
      width: 600px;
      height: 300px;
      margin: 0 auto;
    }
  }
`;

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${DEVICE.mobile} {
    gap: 35px;
  }
  @media ${DEVICE.tablet} {
    gap: 45px;
  }
  @media ${DEVICE.laptop} {
    gap: 70px;
  }
`;

export const Text = styled('h2')`
  color: ${(p) => p.theme.colors.darkText};
  @media ${DEVICE.mobile} {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
  }
  @media ${DEVICE.tablet} {
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
  }
  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 43px;
    line-height: 54px;
  }
`;

export const Btn = styled('button')`
  cursor: pointer;
  border: none;
  border-radius: 32px;
  padding: 22px 47px;
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
