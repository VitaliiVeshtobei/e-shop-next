import styled from 'styled-components';

export const Iframe = styled.iframe`
  display: block;
  border: 0;
  width: 100%;
  height: 400px;
  border: 1px solid ${(p) => p.theme.colors.border};
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.44;
  color: ${(p) => p.theme.colors.scndDarkText};
`;
