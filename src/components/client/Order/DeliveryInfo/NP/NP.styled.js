import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(p) => p.theme.colors.navbar};
  padding: 20px 12px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  span {
    color: ${(p) => p.theme.colors.warning};
  }
`;

export const RadioWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RadioLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: flex;
`;
export const Radio = styled.input`
  margin-right: 5px;
  width: 14px;
  height: 14px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14.5px;
    height: 14.5px;
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
      width: 14.5px;
      height: 14.5px;
      border: 4px solid ${(p) => p.theme.colors.accent};
      border-radius: 50%;
    }
  }
`;

export const Wrap = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
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
