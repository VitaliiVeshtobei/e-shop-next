import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import DEVICE from '@/constants/deviceSize';
const { tablet, laptop, mobileMax } = DEVICE;

export const Wrapper = styled.section`
  height: 307px;
  overflow: hidden;

  @media ${mobileMax} {
    height: 568px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.44;
  color: ${(p) => p.theme.colors.scndDarkText};
  margin-bottom: 10px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  overflow: hidden;
  position: relative;
  padding: 10px 5px;
`;

export const Item = styled.li`
  position: relative;
  padding: 10px;
  height: 250px;
  width: 200px;
  border: 1px solid #b6b6b6;
  border-radius: 20px;
  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.01);
    -webkit-box-shadow: 0px 2px 6px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 2px 6px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
    z-index: 10;
  }
`;

export const LinkCard = styled(Link)`
  cursor: pointer;
  /* transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.01);
    -webkit-box-shadow: 0px 2px 6px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 2px 6px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
    z-index: 10;
  } */
`;

export const Img = styled(Image)`
  box-sizing: border-box;
  position: absolute;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 180px;
  height: 150px;
  margin-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Article = styled.p`
  margin-bottom: 4px;
  height: 30px;
  font-size: 12px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.greyText};
  overflow: hidden;
`;

export const ProductStatus = styled.p`
  font-size: 12px;
  line-height: 1.23;
  color: ${(p) => {
    switch (p.status) {
      case 'available':
        return p.theme.colors.available;
      case 'not_available':
        return p.theme.colors.corrasion;
      case 'waiting':
        return p.theme.colors.waiting;
      default:
        return p.theme.colors.greyText;
    }
  }};
  margin-bottom: 5px;

  @media ${laptop} {
    font-size: 14px;
  }
`;

export const Price = styled.p`
  font-weight: ${(p) => {
    if (p.type === 'old') {
      return '400';
    }
    return '700';
  }};
  font-size: 10px;
  line-height: 1.23;
  color: ${(p) => {
    if (p.type === 'old') {
      return p.theme.colors.greyText;
    }
    return p.theme.colors.darkText;
  }};

  text-decoration: ${(p) => {
    if (p.type === 'old') {
      return 'line-through';
    }
    return 'none';
  }};

  @media ${laptop} {
    font-size: 12px;
  }
`;

export const DiscountPrice = styled.p`
  margin-right: 20px;
  color: ${(p) => p.theme.colors.warning};
  font-weight: 700;
  font-size: 15px;
  line-height: 1.23;
  @media ${laptop} {
    font-size: 17px;
  }
`;
export const DiscountWrap = styled.div`
  display: flex;
`;

export const DiscountPercent = styled.div`
  z-index: 2;
  position: absolute;
  top: 20px;
  left: 20px;
  height: 20px;
  width: 35px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  font-weight: 600;
  border-radius: 20px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};

  @media ${tablet} {
    top: 23px;
    left: 23px;
    height: 20px;
    width: 35px;
  }

  @media ${laptop} {
    font-size: 11px;
  }
`;
