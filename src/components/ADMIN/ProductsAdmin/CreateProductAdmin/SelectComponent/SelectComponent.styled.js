import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 40px;
  outline: none;
  border: 2px solid ${(p) => (p.errorStatus ? p.theme.colors.warning : p.theme.colors.border)};
  background-color: transparent;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 10px;
  transition: all ${(p) => p.theme.transition};

  &:focus {
    border-color: ${(p) => (p.errorStatus ? p.theme.colors.warning : p.theme.colors.border)};
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  transition: all ${(p) => p.theme.transition};
  pointer-events: none;
  color: ${(p) => p.theme.colors.darkText};

  ${Select}:focus + &,
  ${Select}:not(:placeholder-shown) + & {
    top: 2px;
    left: 15px;
    font-size: 10px;
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.navbar};
    padding: 0 10px;
    border-radius: 10px;
  }

  ${Select}:not(:focus)  + & {
    color: ${(p) => p.theme.colors.darkText};
  }
`;

export const Option = styled.option`
  font-size: 14px;
  color: #555;
  background-color: #fff;
`;
