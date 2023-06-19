import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationStyled = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  li {
    transition: transform ${(p) => p.theme.transition};
    &:not(:last-child) {
      margin-right: 10px;
    }

    &:hover,
    &:focus {
      transform: scale(1.07);
    }
  }

  li a {
    border-radius: 7px;
    padding: 8px;
    border: 1px solid ${(p) => p.theme.colors.border};
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
    color: ${(p) => p.theme.colors.scndDarkText};
    font-weight: 700;
    font-size: 18px;
  }
  li.selected a {
    background-color: ${(p) => p.theme.colors.accent};
    border-color: transparent;
    color: ${(p) => p.theme.colors.lightText};
    /* min-width: 32px; */
  }
  li.disabled a {
    display: none;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
