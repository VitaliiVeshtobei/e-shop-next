import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid
    ${(p) => {
      switch (p.done) {
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
`;
export const TextArea = styled.textarea`
  resize: none;
  font-family: inherit;
  height: 150px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.border};
  outline: none;
`;
