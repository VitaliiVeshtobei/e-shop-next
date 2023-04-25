import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 280px;
  height: 280px;
  @media screen and (min-width: 410px) {
    width: 360px;
    height: 360px;
  }

  img {
    border: 1px solid ${(p) => p.theme.colors.border};
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    /* width: 100%;
    width: 100%; */
  }
`;
export const DiscountPercent = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  height: 40px;
  width: 65px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  border-radius: 25px;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.lightText};
`;

// export const Slide = styled(Slider)`
//   position: relative;
//   .slick-arrow {
//     background-color: black;
//   }

//   .slick-dots {
//     position: absolute;
//     top: 0;
//     left: 100%;
//     /* text-align: left; */

//     li {
//       display: block;
//       margin-bottom: 85px;
//       /* &:not(:last-child) {
//         margin-right: 85px;
//       } */
//     }
//     img {
//       border: 1px solid ${(p) => p.theme.colors.border};
//       border-radius: 20px;
//       overflow: hidden;
//     }
//   }
// `;

export const Slide = styled(Slider)`
  width: 280px;
  margin-right: -13px;
  /* position: relative; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-bottom: 50px;

  img {
    border: 1px solid ${(p) => p.theme.colors.border};
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    height: 80px;
    width: 80px;
    /* &:focus {
      outline: none;
      border: transparent;
    } */

    @media screen and (min-width: 410px) {
      height: 100px;
      width: 100px;
    }
  }

  @media screen and (min-width: 410px) {
    margin-right: -29px;
    width: 380px;
  }
`;

export const PrevArrow = styled.button`
  position: absolute;
  left: -20px;
  top: 35px;

  margin-right: 8px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  svg {
    height: 16px;
    width: 16px;
    fill: ${(p) => p.theme.colors.darkText};
    transition: fill ${(p) => p.theme.transition};
    &:hover {
      fill: ${(p) => p.theme.colors.accent};
    }

    @media screen and (min-width: 410px) {
      height: 20px;
      width: 20px;
    }
  }

  @media screen and (min-width: 410px) {
    left: -25px;
    top: 45px;
  }
`;
export const NextArrow = styled.button`
  position: absolute;
  right: -7px;
  top: 35px;

  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  svg {
    height: 16px;
    width: 16px;
    fill: ${(p) => p.theme.colors.darkText};
    width: 20px;
    transition: fill ${(p) => p.theme.transition};

    &:hover {
      fill: ${(p) => p.theme.colors.accent};
    }

    @media screen and (min-width: 410px) {
      height: 20px;
      width: 20px;
    }
  }

  @media screen and (min-width: 410px) {
    right: 0;
    top: 42px;
  }
`;
