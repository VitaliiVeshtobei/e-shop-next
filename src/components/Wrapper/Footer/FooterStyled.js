import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import DEVICE from '../../../constants/deviceSize';
const { tablet, laptop } = DEVICE;
import Link from 'next/link';

export const FooterContainer = styled.footer`
  height: 550px;
  background-color: ${(p) => p.theme.colors.accentBg};
  padding: 25px 30px;
  @media ${tablet} {
    height: 400px;
  }
  @media screen and (min-width: 950px) {
    padding: 25px 60px;
    height: 270px;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media ${tablet} {
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div``;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-size: 28px;
  color: ${(p) => p.theme.colors.lightText};
`;

export const LogoText = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.lightText};
  ::after {
    content: '';
    margin-top: 36px;
    display: block;
    width: 100%;
    border: 1px solid ${(p) => p.theme.colors.border};
    @media ${tablet} {
      margin-bottom: 25px;
    }
  }

  @media ${tablet} {
    font-size: 18px;
    width: 220px;
  }

  @media screen and (min-width: 950px) {
    width: 280px;
  }
  @media ${laptop} {
    width: 310px;
    font-size: 20px;
  }
`;

export const CategoriesContainer = styled.div`
  /* width: 190px; */
  width: 100%;
  @media ${tablet} {
    width: 200px;
  }
  @media screen and (min-width: 950px) {
    width: 300px;
  }
  @media ${laptop} {
    width: 450px;
  }
`;

export const TitleCategories = styled.p`
  margin-bottom: 21px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  color: ${(p) => p.theme.colors.accent};
  text-align: center;

  @media ${tablet} {
    font-size: 18px;
  }

  @media screen and (min-width: 950px) {
    text-align: start;
  }

  @media ${laptop} {
    font-size: 20px;
  }
`;

export const ListCategories = styled.ul`
  /* height: 140px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 100px;
  }

  @media screen and (min-width: 950px) {
    align-items: start;
    height: 140px;
  }
`;

export const CategoriesItem = styled.li`
  transition: transform ${(p) => p.theme.transition};
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:not(:nth-last-child(-n + 3)) {
    margin-right: 22px;
  }
  @media ${tablet} {
    &:not(:nth-last-child(-n + 3)) {
      margin-right: 0;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  @media ${laptop} {
    &:not(:nth-last-child(-n + 3)) {
      margin-right: 150px;
    }
  }
`;

export const CategoriesLink = styled(Link)`
  font-weight: 400;
  font-size: 15px;
  line-height: 1.52;
  color: ${(p) => p.theme.colors.lightText};
  position: relative;
  /* cursor: pointer; */
  &::after {
    content: '';
    position: ${(p) => p.theme.line.position};
    bottom: ${(p) => p.theme.line.bottom};
    left: ${(p) => p.theme.line.left};
    transition: ${(p) => p.theme.line.transition};
    /* width: ${(p) => p.theme.line.width}; */
    width: ${(p) => (p.path === p.href ? '100%' : p.theme.line.width)};
    height: ${(p) => p.theme.line.height};
    background-color: ${(p) => p.theme.line.bgColor};
    margin-bottom: 5px;
    @media ${tablet} {
      margin-bottom: 0px;
    }
  }

  &:hover::after {
    width: ${(p) => p.theme.lineHover.width};
  }
  &:focus::after {
    width: ${(p) => p.theme.lineHover.width};
  }
  @media ${tablet} {
    font-size: 17px;
  }

  @media ${laptop} {
    font-size: 19px;
  }
`;

export const ContactsContainer = styled.div``;
export const ContactsList = styled.ul``;
export const ContactsItem = styled.li`
  margin-bottom: 28px;
  transition: transform ${(p) => p.theme.transition};
  display: flex;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  a {
    display: flex;
    position: relative;
    font-size: 15px;
    line-height: 1.25;
    color: ${(p) => p.theme.colors.lightText};
    @media ${tablet} {
      font-size: 17px;
    }
    @media ${laptop} {
      font-size: 19px;
    }
  }
  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    stroke: ${(p) => p.theme.colors.smoke};
    stroke-width: 1px;

    @media ${tablet} {
      width: 24px;
      height: 24px;
    }

    @media ${laptop} {
      width: 30px;
      margin-right: 16px;
      height: 30px;
    }
  }
`;

export const ListIconsStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: start;
  gap: 40px;
  li {
    transition: transform ${(p) => p.theme.transition};
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

export const ListIconsLink = styled.a`
  color: ${(p) => p.theme.colors.smoke};
  transition: color ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.05);
    color: ${(p) => {
      switch (p.color) {
        case 'tg':
          return '#2AABEE';
        case 'vb':
          return '#7360F2';
        case 'wt':
          return '#25D366';
        default:
          return p.theme.colors.accent;
      }
    }};
  }

  svg {
    width: 24px;
    height: 24px;
    @media ${laptop} {
      width: 30px;
      height: 30px;
    }
  }
`;
