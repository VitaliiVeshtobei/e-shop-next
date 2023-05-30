import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 8px;
  padding: 15px;
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
  background-color: ${(p) => p.theme.colors.accent};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${(p) => p.theme.colors.scndDarkText};

  span {
    color: ${(p) => p.theme.colors.warning};
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-weight: 500;
  svg {
    margin-right: 5px;
  }
`;
export const Radio = styled.input`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16.5px;
    height: 16.5px;
    border: 2px solid ${(p) => p.theme.colors.border};
    border-radius: 50%;
    /* transition: border ${(p) => p.theme.transition}; */
  }
  &:hover::after {
    border: 2px solid ${(p) => p.theme.colors.scndDarkText};
  }
  &:checked {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${(p) => p.theme.colors.scndDarkText};
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16.5px;
      height: 16.5px;
      border: 4px solid ${(p) => p.theme.colors.accent};
      border-radius: 50%;
    }
  }
`;
