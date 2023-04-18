import styled from 'styled-components';

export const ListBtns = styled('ul')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const ItemBtn = styled('li')``;
export const BtnContinue = styled('button')`
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
export const BtnReset = styled('button')`
  cursor: pointer;
  border: 1px solid #c33131;
  border-radius: 32px;
  padding: 22px 47px;
  color: #c33131;
  background: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  transition: ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
  }
`;
