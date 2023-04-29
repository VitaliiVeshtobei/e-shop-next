import React from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { BurgerButton } from './Burger.styled';

export const Burger = ({ handleClickBurger, showBurgerMenu }) => {
  return (
    <BurgerButton
      type="button"
      onClick={handleClickBurger}
    >
      {showBurgerMenu ? <RxCross1 /> : <RxHamburgerMenu />}
    </BurgerButton>
  );
};
