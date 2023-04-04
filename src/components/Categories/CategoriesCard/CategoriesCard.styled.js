import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ItemLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;

  p {
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.44;
    color: ${(p) => p.theme.colors.scndDarkText};

    @media screen and (max-width: 420px) {
      font-size: 14px;
    }
  }
`;

export const Img = styled.img`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  height: 200px;
`;
export const ContainerImg = styled.div`
  width: 200px;

  @media screen and (max-width: 420px) {
    width: 240px;
  }
`;

export const Item = styled.li`
  overflow: hidden;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* display: block; */

  width: 315px;
  height: 315px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  margin: 15px;
  cursor: pointer;
  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
  }
`;
