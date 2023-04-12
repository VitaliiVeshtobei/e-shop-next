import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

export const Wrapper = styled.section`
  min-width: 314px;
  /* gap: 20px; */
  display: flex;
  flex-direction: column;

  .price-slider-container {
    /* background-color: rgba(0, 0, 0, 0.1); */
    /* height: 400px; */
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
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
  display: block;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  padding-left: 40px;
  color: ${(p) => p.theme.colors.darkHover};
  transition: transform ${(p) => p.theme.transition};

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
`;
