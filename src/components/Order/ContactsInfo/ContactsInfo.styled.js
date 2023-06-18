import styled from 'styled-components';
import DEVICE from '@/constants/deviceSize';
const { tablet, laptop } = DEVICE;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid
    ${(p) => {
      switch (p.correct) {
        case false:
          return p.theme.colors.border;
        case true:
          return p.theme.colors.available;
        default:
          return p.theme.colors.border;
      }
    }};
  border-radius: 8px;
  padding: 15px;
  @media screen and (min-width: 970px) {
    width: 550px;
  }
`;
export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;
export const Step = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.lightText};
  background-color: ${(p) => {
    switch (p.done) {
      case false:
        return p.theme.colors.accent;
      case true:
        return p.theme.colors.available;
      default:
        return p.theme.colors.accent;
    }
  }};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  svg {
    width: 16px;
    height: 16px;
  }
`;
export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${(p) => p.theme.colors.scndDarkText};

  span {
    color: ${(p) => p.theme.colors.warning};
  }
`;
export const Form = styled.form``;
export const Label = styled.label`
  font-size: 14px;
  span {
    color: ${(p) => p.theme.colors.warning};
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.border};
  padding: 0 10px;
  margin-bottom: 14px;
  margin-top: 5px;
  outline: none;
  border: 1px solid
    ${(p) => {
      switch (p.correct) {
        case false:
          return p.theme.colors.warning;
        case true:
          return p.theme.colors.available;
        default:
          return p.theme.colors.border;
      }
    }};
`;
export const Btn = styled.button`
  width: 100%;
  background-color: ${(p) => p.theme.colors.smoke};
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color ${(p) => p.theme.transition};

  font-size: 14px;

  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;
