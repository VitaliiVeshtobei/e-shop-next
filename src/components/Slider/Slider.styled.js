import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: block;
  height: 450px;
  background-color: silver;

  @media screen and (max-width: 1440px) {
    height: 400px;
  }
  @media screen and (max-width: 1240px) {
    height: 300px;
  }
  @media screen and (max-width: 960px) {
    height: 230px;
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }

  @media screen and (max-width: 450px) {
    height: 120px;
  }
  @media screen and (max-width: 320px) {
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
  object-fit: cover;
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
  transform: translateY(-50%);

  svg {
    filter: drop-shadow(1px 3px 3px rgba(0, 0, 0, 1));
    height: 100%;
    width: 100%;
    transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};
  }

  &:hover svg {
    transform: scale(1.5);
  }

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 35px;
    &:hover svg {
      transform: scale(1.2);
    }
  }
`;

export const ButtonRight = styled.button`
  opacity: 0;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
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

  &:hover svg {
    transform: scale(1.5);
  }

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 35px;
    &:hover svg {
      transform: scale(1.2);
    }
  }
`;

export const SlideBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 450px) {
    bottom: 0;
  }
`;

export const ButtonSlide = styled.button`
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: ${(p) => (p.dot ? `transparent` : `1px solid ${p.theme.colors.corrasion}`)};
  transform: ${(p) => (p.dot ? `scale(1.05)` : `scale(1)`)};
  box-shadow: ${(p) => (p.dot ? `0px 3px 6px -1px ${p.theme.colors.darkHover}` : 'none')};
  background-color: ${(p) => (p.dot ? p.theme.colors.accent : 'transparent')};
  border-radius: 50%;
  transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition},
    background-color ${(p) => p.theme.transition};

  &:hover {
    transform: scale(1.07);
  }

  &:focus {
    transform: scale(1.07);
  }

  :not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
  @media screen and (max-width: 450px) {
    width: 7px;
    height: 7px;
  }
`;
