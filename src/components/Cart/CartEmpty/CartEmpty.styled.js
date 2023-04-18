import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
`;

export const Text = styled('h2')`
  font-weight: 700;
  font-size: 43px;
  line-height: 54px;
  color: ${(p) => p.theme.colors.darkText};
`;

export const Btn = styled('button')`
  cursor: pointer;
  border: none;
  border-radius: 32px;
  padding: 22px 47px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  transition: ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
`;
