import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Textarea = styled.textarea`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  outline: none;
  border: 2px solid ${(p) => (p.errorStatus ? p.theme.colors.warning : p.theme.colors.border)};
  background-color: transparent;
  border-radius: 8px;
  font-family: inherit;
  line-height: 1.5;
  font-size: 16px;
  padding: 10px 10px;
  transition: all ${(p) => p.theme.transition};

  &:focus {
    border-color: ${(p) => (p.errorStatus ? p.theme.colors.warning : p.theme.colors.border)};
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 10px;
  top: 5px;

  font-size: 16px;
  transition: all ${(p) => p.theme.transition};
  pointer-events: none;
  color: ${(p) => p.theme.colors.darkText};

  ${Textarea}:focus + &,
  ${Textarea}:not(:placeholder-shown) + & {
    top: -4px;
    left: 15px;
    font-size: 12px;
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.navbar};
    padding: 0 10px;
    border-radius: 10px;
  }

  ${Textarea}:not(:focus)  + & {
    color: ${(p) => p.theme.colors.darkText};
  }
`;
