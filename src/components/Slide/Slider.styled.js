import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: block;
  position: relative;
  height: 750px;
  padding: 37px 0 0;

  @media screen and (max-width: 1440px) {
    height: 550px;
  }
  @media screen and (max-width: 1240px) {
    height: 450px;
  }
  @media screen and (max-width: 960px) {
    height: 380px;
  }
  @media screen and (max-width: 768px) {
    height: 270px;
  }
  @media screen and (max-width: 450px) {
    height: 220px;
  }
  @media screen and (max-width: 449px) {
    display: none;
  }

  &:hover button {
    opacity: 1;
  }
`;

export const ImageContainer = styled(Image)`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: opacity ease-in-out 1s;

  ${(p) => (p.anime === 'true' ? `opacity: 1;` : 'opacity: 0;')};
`;

export const SlideContainer = styled.div`
  width: 100%;
`;

export const ButtonLeft = styled.button`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  width: 40px;
  height: 50px;
  background: transparent;
  border-radius: 20px;
  color: ${(p) => p.theme.colors.lightText};
  transition: transform ${(p) => p.theme.transition}, opacity ${(p) => p.theme.transition};
  transform: translateY(30%);

  svg {
    filter: drop-shadow(1px 3px 3px rgba(0, 0, 0, 1));
    height: 100%;
    width: 100%;
    transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.5);
  }

  @media screen and (max-width: 768px) {
    &:hover svg,
    &:focus svg {
      transform: scale(1.2);
    }
  }
`;

export const ButtonRight = styled.button`
  opacity: 0;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(30%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  width: 40px;
  height: 50px;
  background: transparent;
  border-radius: 20px;
  color: ${(p) => p.theme.colors.lightText};
  transition: transform ${(p) => p.theme.transition}, opacity ${(p) => p.theme.transition};

  svg {
    filter: drop-shadow(1px 3px 3px rgba(0, 0, 0, 1));
    height: 100%;
    width: 100%;
    transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.5);
  }

  @media screen and (max-width: 768px) {
    &:hover svg,
    &:focus svg {
      transform: scale(1.2);
    }
  }
`;

export const SlideBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 1240px) {
    bottom: -30px;
  }
`;

export const ButtonSlide = styled.button`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: 1px solid ${(p) => p.theme.colors.corrasion};
  background-color: ${(p) => (p.dot ? p.theme.colors.accent : 'transparent')};
  border-radius: 50%;
  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition},
    background-color ${(p) => p.theme.transition};

  &:hover {
    background-color: ${(p) => p.theme.colors.accent};
    transform: scale(1.05);
    -webkit-box-shadow: 0px 3px 6px -1px ${(p) => p.theme.colors.darkHover};
    box-shadow: 0px 3px 6px -1px ${(p) => p.theme.colors.darkHover};
    border: transparent;
  }

  &:focus {
    transform: scale(1.05);
  }

  :not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;
