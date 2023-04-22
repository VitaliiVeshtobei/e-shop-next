import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';
import DEVICE from '@/constants/deviceSize';

export const Wrapper = styled.section`
  min-width: 314px;
  display: flex;
  flex-direction: column;

  @media ${DEVICE.laptopMax} {
    position: absolute;
    top: -34px;
    left: 0;
    background-color: ${(p) => p.theme.colors.navbar};
    z-index: 10;
    padding: 15px 20px 30px;
    border-radius: 3px;
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};

    ${(p) =>
      !p.status
        ? `position: absolute;
 width: 1px;
 height: 1px;   
margin: -1px;   
border: 0;   
padding: 0;   
white-space: nowrap;   
clip-path: inset(100%);   
clip: rect(0 0 0 0);   
overflow: hidden;`
        : ''}
  }
  @media ${DEVICE.mobileMax} {
    left: -15px;
  }

  @media screen and (min-width: 1280px) and (max-width: 1360px) {
    min-width: 239px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;

  ${(p) =>
    p.status
      ? `
  border-bottom: 1px solid #b6b6b6;
  padding-bottom: 20px;`
      : ''}
`;

export const Text = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(p) => p.theme.colors.accentBg};
`;

export const TextNumber = styled.p`
  padding-left: 15px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(p) => p.theme.colors.accentBg};
`;

export const Button = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: ${(p) => p.theme.colors.greyText};
  transition: transform ${(p) => p.theme.transition};
  :hover {
    transform: scale(1.1);
  }
`;

export const InputContainer = styled.input`
  margin-right: 12px;
  &[type='radio'] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  ${(p) => (p.checked ? `& ~ svg {opacity: 1};` : '')}
  ${(p) => (p.disabled ? `& ~ label {color: #D4DDE1};` : '')}
  ${(p) => (p.disabled ? `& ~ label::after {background: #D4DDE1};` : '')}
`;

export const Icon = styled(BsCheckLg)`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  opacity: 0;
  color: white;
  transition: opacity ${(p) => p.theme.transition};
`;

export const Label = styled.label`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  padding-left: 35px;
  color: ${(p) => p.theme.colors.darkHover};
  transition: transform ${(p) => p.theme.transition};
  @media screen and (min-width: 1280px) and (max-width: 1360px) {
    font-size: 13px;
  }

  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: ${(p) => p.theme.colors.checkboxBg};
    border: transparent;
    border-radius: 8px;
    transition: background ${(p) => p.theme.transition};
  }

  ${InputContainer}:checked + &::after {
    background: ${(p) => p.theme.colors.scndDarkText};
    border: 1px solid ${(p) => p.theme.colors.border};
    border-radius: 8px;
  }
`;

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #b6b6b6;

  ${(p) =>
    p.status
      ? `position: absolute;
 width: 1px;
 height: 1px;   
margin: -1px;   
border: 0;   
padding: 0;   
white-space: nowrap;   
clip-path: inset(100%);   
clip: rect(0 0 0 0);   
overflow: hidden; `
      : ''}
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #b6b6b6;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 26px;
  cursor: pointer;
  transition: transform ${(p) => p.theme.transition};

  ${(p) => (p.disabled ? `pointer-events: none;` : '')}
`;
