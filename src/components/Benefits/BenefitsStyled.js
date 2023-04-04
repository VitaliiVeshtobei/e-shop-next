import styled from 'styled-components';
import DEVICE from '../../constants/deviceSize';

export const Container = styled('div')`
  display: flex;

  align-items: center;
  height: 155px;
  margin-top: 75px;
  background-color: ${(p) => p.theme.colors.accentBg};
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    margin-left: -30px;
    margin-right: -30px;
    border-radius: 0;
  }
`;
export const List = styled('ul')`
  display: flex;
  justify-content: center;
  width: 100%;

  list-style: none;
  li {
    display: flex;
    align-items: center;
    &:first-child svg {
      fill: transparent;
      stroke: ${(p) => p.theme.colors.accent};
    }

    svg {
      fill: ${(p) => p.theme.colors.accent};

      @media ${DEVICE.mobile} {
        width: 44px;
        height: 44px;
        margin: 0;
      }
      @media ${DEVICE.tablet} {
        width: 52px;
        height: 52px;
      }
      @media ${DEVICE.laptop} {
        width: 67px;
        height: 67px;
        margin-right: 31px;
      }
    }
    h3 {
      color: ${(p) => p.theme.colors.lightText};
      @media ${DEVICE.mobile} {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 0;
        text-align: center;
      }
      @media ${DEVICE.tablet} {
        font-size: 18px;
        line-height: 22px;
      }
      @media ${DEVICE.laptop} {
        margin-bottom: 6px;
        font-weight: 600;
        font-size: 22.09px;
        line-height: 33px;
        text-align: start;
      }
    }
    p {
      color: ${(p) => p.theme.colors.lightText};
      @media ${DEVICE.mobile} {
        display: none;
      }
      @media ${DEVICE.laptop} {
        display: block;
        font-weight: 400;
        font-size: 18.09px;
        line-height: 27px;
        text-align: start;
      }
    }
    p:nth-child(2) {
      @media ${DEVICE.tablet} {
        display: block;
        font-size: 16px;
        text-align: center;
      }
      @media ${DEVICE.laptop} {
        text-align: start;
      }
    }

    @media ${DEVICE.mobile} {
      flex-direction: column;
    }
    @media ${DEVICE.laptop} {
      flex-direction: row;
    }
  }
  @media ${DEVICE.mobile} {
    gap: 0;
    justify-content: space-evenly;
  }
  @media ${DEVICE.laptop} {
    gap: 110px;
    justify-content: center;
  }
`;
