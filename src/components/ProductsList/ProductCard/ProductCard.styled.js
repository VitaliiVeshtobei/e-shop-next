import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import DEVICE from '@/constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const Wrapper = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 28px 14px;
`;

export const DiscountPercent = styled.div`
  position: absolute;
  top: 33px;
  left: 13%;
  height: 30px;
  width: 45px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  border-radius: 25px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  @media screen and (min-width: 370px) {
    top: 33px;
    left: 60px;
    height: 30px;
    width: 45px;
  }

  @media ${laptop} {
    font-size: 14px;
  }
`;

export const Cart = styled.button`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 80%;
  top: 85%;
  background-color: ${(p) => (p.inCart ? p.theme.colors.accent : p.theme.colors.smoke)};
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;

  display: ${(p) => {
    if (p.inStock !== 'available') {
      return ' none';
    }
    return 'flex';
  }};
  justify-content: center;
  align-items: center;
  transition: transform ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media screen and (min-width: 370px) {
    left: 267px;

    top: 12px;
    width: 30px;
    height: 30px;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${(p) => p.theme.colors.scndDarkText};
  }
`;

export const ProductImage = styled(Image)`
  margin-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  /* display: block; */
`;

export const Article = styled.p`
  font-size: 12px;
  line-height: 1.23;
  color: ${(p) => p.theme.colors.greyText};
  margin-bottom: 6px;
  @media ${laptop} {
    font-size: 14px;
  }
`;

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.23;
  color: ${(p) => p.theme.colors.scndDarkText};
  margin-bottom: 10px;
  @media ${laptop} {
    font-size: 16px;
  }
`;

export const ProductStatus = styled.p`
  font-size: 13px;
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
  margin-bottom: 6px;

  @media ${laptop} {
    font-size: 15px;
  }
`;

export const Price = styled.p`
  font-weight: ${(p) => {
    if (p.type === 'old') {
      return '400';
    }
    return '700';
  }};
  font-size: 15px;
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
    font-size: 17px;
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
