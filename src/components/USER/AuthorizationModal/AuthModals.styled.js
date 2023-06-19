import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
import InputMask from 'react-input-mask';
import Link from 'next/link';
const { tablet } = DEVICE;

export const Container = styled.div``;

export const Title = styled.h2`
  font-size: 24px;
  position: relative;
  color: ${(p) => p.theme.colors.scndDarkText};
  margin-bottom: 45px;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${(p) => p.theme.colors.border};

    bottom: -10px;
    left: 0;
  }
`;
export const Form = styled.form`
  width: 100%;
  @media ${tablet} {
    width: 320px;
  }
`;
export const Label = styled.label`
  font-size: 14px;
  color: ${(p) => p.theme.colors.greyText};
`;
export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${(p) => p.theme.colors.border};
  padding: 0 10px;
  margin-top: 4px;

  @media ${tablet} {
    width: 320px;
  }
`;
export const InputMaskPhone = styled(InputMask)`
  width: 100%;
  margin-bottom: 15px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${(p) => p.theme.colors.border};
  padding: 0 10px;
  margin-top: 4px;

  @media ${tablet} {
    width: 320px;
  }
`;

export const EyeBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 45%;
  transform: translateY(-50%);
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    color: ${(p) => p.theme.colors.greyText};
  }
`;

export const ForgetPassword = styled.p`
  margin-bottom: 15px;
  font-size: 14px;
  color: ${(p) => p.theme.colors.scndDarkText};
  transition: color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
export const Btn = styled.button`
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.colors.scndDarkText};
  border-radius: 8px;
  color: ${(p) => p.theme.colors.lightText};
  opacity: ${(p) => (p.disabled ? 0.5 : 1)};
  font-size: 18px;
  transition: background-color ${(p) => p.theme.transition};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(p) => (p.disabled ? p.theme.colors.scndDarkText : p.theme.colors.accent)};
  }

  @media ${tablet} {
    margin-top: ${(p) => {
      if (p.place === 'register') {
        return '10px';
      }
      return '0px';
    }};
  }
`;
export const SwitchBtn = styled.button`
  display: block;
  font-size: 16px;
  margin-left: auto;
  margin-right: auto;
  color: ${(p) => p.theme.colors.darkText};
  margin-bottom: 24px;
  transition: color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
  @media ${tablet} {
    text-align: start;
    margin-left: ${(p) => {
      if (p.place === 'register') {
        return '60px';
      }
      return '100px';
    }};
    margin-bottom: 0;
  }
`;

export const OrLine = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.greyText};
  position: relative;
  text-align: center;
  margin-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 47%;
    background-color: ${(p) => p.theme.colors.border};
    bottom: 40%;
    left: 0;
    @media ${tablet} {
      height: ${(p) => {
        if (p.place === 'register') {
          return '230px';
        }
        return '125px';
      }};
      width: 1px;
      top: ${(p) => {
        if (p.place === 'register') {
          return '-230px';
        }
        return '-125px';
      }};
      left: 10px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 47%;
    background-color: ${(p) => p.theme.colors.border};
    bottom: 40%;
    right: 0;
    @media ${tablet} {
      height: ${(p) => {
        if (p.place === 'register') {
          return '230px';
        }
        return '135px';
      }};
      width: 1px;
      top: 20px;

      left: 10px;
    }
  }

  @media ${tablet} {
    position: absolute;
    left: 56%;
    top: 50%;
    height: 100%;
  }
`;

export const ScndText = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${(p) => p.theme.colors.darkText};
  margin-bottom: 20px;
  @media ${tablet} {
    position: absolute;
    right: 60px;
    top: ${(p) => {
      if (p.place === 'register') {
        return '255px';
      }
      return '145px';
    }};
  }
`;

export const GoogleBtn = styled(Link)`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${(p) => p.theme.colors.darkText};
  transition: background-color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.smoke};
  }

  svg {
    margin-right: 6px;
    width: 20px;
    height: 20px;
  }

  @media ${tablet} {
    width: 200px;
    position: absolute;
    right: 40px;
    top: ${(p) => {
      if (p.place === 'register') {
        return '285px';
      }
      return '180px';
    }};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 15px;
`;
