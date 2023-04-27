import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';

export const FormStyled = styled('form')`
  position: relative;
  flex-grow: 1;
  /* margin: 0 30px; */
`;
export const InputStyled = styled('input')`
  width: 100%;
  height: 40px;
  padding: 17px 25px;
  border-radius: 8px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  :focus {
    outline: none;
    border: none;
  }
`;

export const ButtonStyled = styled('button')`
  position: absolute;
  right: 0px;
  width: 132px;
  height: 100%;
  background: ${(p) => p.theme.colors.accent};
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${(p) => p.theme.colors.lightText};
  transition: ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
  @media ${DEVICE.mobile} {
    width: 70px;
  }
  @media ${DEVICE.tablet} {
    width: 100px;
  }
  @media ${DEVICE.laptop} {
    width: 132px;
  }
`;
