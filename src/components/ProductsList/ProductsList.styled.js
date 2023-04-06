import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width:310px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  margin-right:27px;
  margin-bottom:24px;

transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;`;
