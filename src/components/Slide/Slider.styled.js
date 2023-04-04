import styled from 'styled-components';

export const Wrapper = styled.section`
  display: block;
  position: relative;
  height: 750px;
  padding: 37px 0 0;
  margin-left: -30px;
  margin-right: -30px;

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
`;

export const ImageContainer = styled.div`
  position: absolute;

  background-image: url(${(p) => p.src});
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: opacity ease-in-out 1s;

  ${(p) => (p.anime ? `opacity: 1;` : 'opacity: 0;')};
`;

// export const Div = styled.div`
//   width: 100%;
//   /* position: absolute; */

//   /* @media screen and (max-width: 903px) {
//     width: 320px;
//   }
//   @media screen and (max-width: 420px) {
//     width: 100%;
//   } */
// `;
export const SlideContainer = styled.div`
  width: 100%;
  /* @media screen and (max-width: 450px) {
    height: 220px;
  }
  @media screen and (max-width: 768px) {
    height: 270px;
  } */

  /* position: relative; */
  /* width: 100%; */
  /* overflow: hidden; */
  /* margin-left: -30px;
  margin-right: -30px; */
  /* 
  @media screen and (max-width: 903px) {
    height: 304px;
    width: 320px;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
  } */
`;

// export const ContainerPrice = styled.div`
//   position: absolute;
//   bottom: 40px;
//   right: 10px;
//   width: 120px;
//   height: 120px;
//   background-color: ${(p) => p.theme.colors.corrasion};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   p {
//     font-style: normal;
//     font-weight: 600;
//     font-size: 22px;
//     line-height: 32px;
//     color: ${(p) => p.theme.colors.lightText};
//   }
// `;

// export const Title = styled.h1`
//   font-style: normal;
//   font-weight: 900;
//   font-size: 43px;
//   line-height: 64px;
//   display: flex;
//   flex-direction: column;
//   color: ${(p) => p.theme.colors.darkText};
//   margin-bottom: 35px;
// `;

// export const Button = styled.button`
//   cursor: pointer;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 0px;
//   gap: 10px;
//   border: transparent;
//   width: 144px;
//   height: 61px;
//   background: ${(p) => p.theme.colors.accent};
//   border-radius: 20px;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 24px;
//   color: ${(p) => p.theme.colors.lightText};
//   transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};
//   &:hover,
//   &:focus {
//     transform: scale(1.05);
//     -webkit-box-shadow: 0px 3px 16px -1px ${(p) => p.theme.colors.darkHover};
//     box-shadow: 0px 3px 16px -1px ${(p) => p.theme.colors.darkHover};
//     outline: transparent;
//   }
// `;

// export const ButtonView = styled.button`
//   cursor: pointer;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 0px;
//   gap: 10px;
//   width: 144px;
//   height: 61px;
//   border: 1px solid ${(p) => p.theme.colors.corrasion};
//   border-radius: 20px;
//   margin-left: 20px;
//   background-color: transparent;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 24px;
//   color: ${(p) => p.theme.colors.corrasion};

//   transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition};
//   &:hover,
//   &:focus {
//     transform: scale(1.05);
//     -webkit-box-shadow: 0px 3px 26px -1px ${(p) => p.theme.colors.darkHover};
//     box-shadow: 0px 3px 16px -1px ${(p) => p.theme.colors.darkHover};
//     outline: transparent;
//   }
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   margin-bottom: 50px;
// `;

// export const SlideBtnContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 7px;
// `;

// export const ButtonSlide = styled.button`
//   cursor: pointer;
//   width: 16px;
//   height: 16px;
//   border: 1px solid ${(p) => p.theme.colors.corrasion};
//   background-color: ${(p) => (p.dot ? p.theme.colors.accent : 'transparent')};
//   border-radius: 50%;
//   transition: transform ${(p) => p.theme.transition}, box-shadow ${(p) => p.theme.transition},
//     background-color ${(p) => p.theme.transition};

//   &:hover,
//   &:focus {
//     background-color: ${(p) => p.theme.colors.accent};
//     transform: scale(1.05);
//     -webkit-box-shadow: 0px 3px 6px -1px ${(p) => p.theme.colors.darkHover};
//     box-shadow: 0px 3px 6px -1px ${(p) => p.theme.colors.darkHover};
//     border: transparent;
//     outline: transparent;
//   }

//   :not(:last-child) {
//     margin-right: 10px;
//   }
// `;
