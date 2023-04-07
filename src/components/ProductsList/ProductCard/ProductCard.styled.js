import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

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
  left: 60px;
  height: 30px;
  width: 45px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
`;

export const Cart = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 267px;
  top: 12px;
  background-color: ${(p) => p.theme.colors.smoke};
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
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
  font-size: 14px;
  line-height: 1.23;
  color: ${(p) => p.theme.colors.greyText};
  margin-bottom: 6px;
`;

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.23;
  color: ${(p) => p.theme.colors.scndDarkText};
  margin-bottom: 10px;
`;

export const ProductStatus = styled.p`
  font-size: 15px;
  line-height: 1.23;
  color: ${(p) => {
    switch (p.status) {
      case true:
        return p.theme.colors.available;
      case false:
        return p.theme.colors.corrasion;
      default:
        return p.theme.colors.greyText;
    }
  }};
  margin-bottom: 6px;
`;

export const Price = styled.p`
  font-weight: ${(p) => {
    if (p.type === 'old') {
      return '400';
    }
    return '700';
  }};
  font-size: 17px;
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
  }}; ;
`;

export const DiscountPrice = styled.p`
  margin-right: 20px;
  color: ${(p) => p.theme.colors.warning};
  font-weight: 700;
  font-size: 17px;
  line-height: 1.23;
`;
export const DiscountWrap = styled.div`
  display: flex;
`;
