import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  thead {
    background-color: ${(p) => p.theme.colors.accentBg};
    color: ${(p) => p.theme.colors.accent};
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #2a2a2a;
  }

  tbody tr {
    td:first-child {
      width: 50px;
    }
    transition: background-color ${(p) => p.theme.transition}, color ${(p) => p.theme.transition},
      border ${(p) => p.theme.transition};
    &:hover {
      cursor: pointer;
    }
  }
  tbody tr:nth-child(2n) {
    background-color: ${(p) => p.theme.colors.smoke};
  }
  tbody tr:hover {
    background-color: ${(p) => p.theme.colors.waiting};
    color: ${(p) => p.theme.colors.lightText};
    div {
      border: 1px solid ${(p) => p.theme.colors.lightText};
    }
  }
`;
