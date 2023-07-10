import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  max-width: 1000px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 50px;
  outline: none;
  border: 2px solid ${(p) => (p.errorStatus ? p.theme.colors.warning : p.theme.colors.border)};
  background-color: transparent;
  border-radius: 8px;
  font-size: 20px;
  padding: 0 20px;
  transition: all ${(p) => p.theme.transition};

  &:focus {
    border-color: ${(p) => (p.errorStatus ? p.theme.colors.warning : p.theme.colors.border)};
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  transition: all ${(p) => p.theme.transition};
  pointer-events: none;
  color: ${(p) => p.theme.colors.darkText};

  ${Input}:focus + &,
  ${Input}:not(:placeholder-shown) + & {
    top: 0;
    left: 15px;
    font-size: 15px;
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.navbar};
    padding: 0 10px;
    border-radius: 10px;
  }

  ${Input}:not(:focus)  + & {
    color: ${(p) => p.theme.colors.darkText};
  }
`;
