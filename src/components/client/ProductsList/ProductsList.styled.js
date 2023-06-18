import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { tablet, tabletMax } = DEVICE;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -15px;

  @media ${tabletMax} {
    width: 100%;
  }
`;

export const Item = styled.li`
  position: relative;
  width: 285px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  margin-right: 16px;
  margin-bottom: 24px;
  max-height: 450px;

  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
  }

  @media ${tablet} {
    width: 310px;
  }
`;
