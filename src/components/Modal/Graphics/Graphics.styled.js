import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: start;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-spacing: 0;
  margin-bottom: 5px;

  thead {
    background-color: ${(p) => p.theme.colors.smoke};
  }
`;

export const Th = styled.th`
  text-align: start;
  padding: 10px 20px;
  border: 1px solid ${(p) => p.theme.colors.border};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.44;

  color: ${(p) => p.theme.colors.scndDarkText};

  @media screen and (max-width: 450px) {
    font-size: 12px;
    padding: 7px 10px;
  }
`;

export const Td = styled.td`
  text-align: start;
  padding: 10px 20px;
  border: 1px solid ${(p) => p.theme.colors.border};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.44;
  color: ${(p) => p.theme.colors.scndDarkText};
  @media screen and (max-width: 450px) {
    font-size: 12px;
    padding: 7px 10px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.44;
  color: ${(p) => p.theme.colors.scndDarkText};
`;
