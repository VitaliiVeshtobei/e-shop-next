import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 75px;
  & .slick-prev,
  & .slick-next {
    width: 30px;
    height: 50px;
  }
  & .slick-prev::before,
  & .slick-next::before {
    width: 100%;
    height: 100%;
    color: ${(p) => p.theme.colors.border};
    opacity: 1.2;
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -10px;
`;

export const SlideBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonSlide = styled.button`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: 1px solid ${(p) => p.theme.colors.corrasion};
  border-radius: 50%;
  margin-top: 48px;
  background-color: transparent;
  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition},
    background-color ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.accent};
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 6px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 3px 6px -1px ${(p) => p.theme.colors.darkHover};
    border: transparent;
    outline: transparent;
  }

  :not(:last-child) {
    margin-right: 10px;
  }
`;
