import styled from 'styled-components';
import DEVICE from '../../../../../constants/deviceSize';

export const ListStyled = styled('ul')`
  display: flex;
  align-items: center;
  text-align: center;
  height: 60px;
  background-color: ${(p) => p.theme.colors.accentBg};
  color: ${(p) => p.theme.colors.lightText};

  @media ${DEVICE.mobile} {
    li:not(:first-child) {
      display: none;
    }
    li:first-child {
      flex-basis: 100%;
    }
  }
  @media ${DEVICE.tablet} {
    li:not(:first-child) {
      display: block;
      flex-basis: 20%;
    }
    li:first-child {
      flex-basis: 40%;
    }
  }
`;
