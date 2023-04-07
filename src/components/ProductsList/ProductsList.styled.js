import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 310px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 20px;
  margin-right: 27px;
  margin-bottom: 24px;

  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
    outline: transparent;
  }
`;

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
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
