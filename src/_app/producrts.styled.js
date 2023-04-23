import DEVICE from '@/constants/deviceSize';
import styled from 'styled-components';
import { BsFilterSquare } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  position: relative;
  gap: 20px;

  @media ${DEVICE.laptopMax} {
    display: inline-flex;
    gap: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #b6b6b6;
  padding: 6px 14px;
  border-radius: 8px;
  background-color: #d4dde1;
  color: rgba(98, 148, 148, 0.85);
  cursor: pointer;
  transition: background-color ${(p) => p.theme.transition}, color ${(p) => p.theme.transition};

  &:hover {
    background-color: rgba(98, 148, 148, 0.5);
    color: #ffffff;
  }

  @media ${DEVICE.laptop} {
    display: none;
  }

  @media ${DEVICE.mobileMax} {
    padding: 6px 5px;
    font-size: 12px;
  }

  @media ${DEVICE.tablet} {
    ${(p) => (p.list <= 2 ? `display: none;` : '')}
  }
`;

export const Icon = styled(BsFilterSquare)`
  height: 15px;
  width: 15px;
  @media ${DEVICE.tabletMax} {
    display: none;
  }
`;
