import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background-color: ${(p) => (p.active === p.id ? p.theme.colors.navbar : p.theme.colors.accent)};
  transition: transform ${(p) => p.theme.transition}, background-color ${(p) => p.theme.transition},
    color ${(p) => p.theme.transition};
  padding: 5px;
  font-size: 14px;
  font-weight: 700;

  ${(p) =>
    p.active === p.id
      ? ` width: 260px;
      color:#000;`
      : ''}

  &:hover {
    background-color: ${(p) => (p.active === p.id ? p.theme.colors.navbar : p.theme.colors.waiting)};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
