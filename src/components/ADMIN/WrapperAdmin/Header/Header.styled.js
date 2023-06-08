import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const Wrapper = styled.header`
  margin-bottom: 10px;
  display: flex;

  @media ${DEVICE.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;
export const Div = styled.div`
  display: flex;
  margin-left: 15px;
  gap: 3px;

  @media ${DEVICE.tablet} {
    margin-left: 0;
    gap: 10px;
  }

  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${(p) => p.theme.colors.smoke};

    @media ${DEVICE.mobileMax} {
      &:not(:first-child) {
        display: none;
      }
    }
    @media ${DEVICE.tablet} {
      font-size: 20px;
      gap: 5px;
    }

    span {
      display: none;
      @media ${DEVICE.tablet} {
        display: inline;
        color: ${(p) => p.theme.colors.accent};
      }
    }
  }
`;

export const Menu = styled.div`
  margin-left: auto;
  @media ${DEVICE.tablet} {
    display: none;
  }
`;
