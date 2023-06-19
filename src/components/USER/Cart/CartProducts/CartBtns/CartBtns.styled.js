import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';

export const ListBtns = styled('ul')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  margin-top: 30px;
`;

export const ItemBtn = styled('li')``;
export const BtnContinue = styled('button')`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};

  transition: ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
  @media ${DEVICE.mobile} {
    padding: 12px 12px;
    font-weight: 500;
    font-size: 14px;
  }
  @media ${DEVICE.tablet} {
    padding: 22px 47px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
`;
export const BtnReset = styled('button')`
  cursor: pointer;
  border: 1px solid #c33131;
  border-radius: 8px;
  color: #c33131;
  background: none;
  transition: ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
  @media ${DEVICE.mobile} {
    padding: 12px 12px;
    font-weight: 500;
    font-size: 14px;
  }
  @media ${DEVICE.tablet} {
    padding: 22px 47px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
`;
