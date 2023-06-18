// import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Item = styled.li`
  margin: 10px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const LinkItem = styled("div")`
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 16px;
  border: 1px solid ${(p) => p.theme.colors.border};

  border-radius: 20px;

  cursor: pointer;
  transition: transform ${(p) => p.theme.transition},
    box-shadow ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.03);
    -webkit-box-shadow: 0px 2px 6px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 2px 6px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
  }
`;

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  background: ${(p) => p.theme.colors.smoke};
  border-radius: 19px;
  color: ${(p) => p.theme.colors.darkText};
  height: 125px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    overflow: hidden;
    top: 15px;
    left: 25px;
    right: 25px;
    bottom: 15px;
    :hover,
    :focus {
      overflow: scroll;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
    ::-webkit-scrollbar {
      background-color: transparent;
      width: 7px;
    }
    ::-webkit-scrollbar-thumb {
      width: 2px;
      height: 4px;
      border-radius: 3px;
      background-color: ${(p) => p.theme.colors.darkText};
    }
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(p) => p.theme.colors.scndDarkText};
  }
`;

export const AvatarContainer = styled.div`
  width: 70px;
  height: 70px;
  border: 2px dashed #eda415;
  margin-right: 28px;
  padding: 7px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
`;
