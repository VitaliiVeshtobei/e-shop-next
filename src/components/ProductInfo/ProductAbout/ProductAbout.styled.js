import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 510px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.23;
  color: ${(p) => p.theme.colors.scndDarkText};
  margin-bottom: 10px;
`;
export const Article = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.27;
  margin-bottom: 22px;

  color: ${(p) => p.theme.colors.greyText};
  span {
    color: ${(p) => p.theme.colors.darkText};
  }
`;
export const DiscountWrap = styled.div`
  display: flex;
`;
export const DiscountPrice = styled.p`
  margin-right: 20px;
  color: ${(p) => p.theme.colors.warning};
  font-weight: 600;
  font-size: 22px;
  line-height: 1.23;
`;
export const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
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
  margin-bottom: 16px;
`;
export const Status = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.27;
  margin-bottom: 32px;
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
  span {
    color: ${(p) => p.theme.colors.darkText};
  }
  svg {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export const Text = styled.p`
  color: ${(p) => p.theme.colors.darkText};
  font-size: 16px;
  line-height: 1.27;
  margin-bottom: 80px;

  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.border};
    left: 0;
    bottom: -35px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  background-color: ${(p) => {
    if (p.inStock !== 'available') {
      return p.theme.colors.unactive;
    }
    switch (p.inCart) {
      case true:
        return p.theme.colors.available;
      case false:
        return p.theme.colors.accent;
      default:
        return p.theme.colors.accent;
    }
  }};
  color: ${(p) => p.theme.colors.lightText};
  height: 55px;
  width: 150px;
  border-radius: 32px;
  border: none;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  margin-bottom: 65px;

  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    box-shadow: ${(p) => {
      if (p.inStock !== 'available') {
        return;
      }
      return `0px 3px 26px -1px ${p.theme.colors.darkHover}`;
    }};
    transform: ${(p) => {
      if (p.inStock !== 'available') {
        return;
      }
      return `scale(1.05)`;
    }};
  }
`;
