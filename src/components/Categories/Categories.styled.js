import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 75px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const Nav = styled.nav``;

export const Text = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 41px;
  text-align: center;
  color: ${(p) => p.theme.colors.darkText};
  margin-bottom: 50px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -15px;
`;
