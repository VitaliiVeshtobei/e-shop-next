import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -15px;
  left: 30%;
  transition: opacity ${(p) => p.theme.transition};

  opacity: ${(p) => (p.status ? 1 : 0)};
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: ${(p) => p.theme.colors.warning};
`;
