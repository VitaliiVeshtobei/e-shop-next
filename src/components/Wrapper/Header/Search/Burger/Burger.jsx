import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BurgerButton } from './Burger.styled';

export const Burger = ({ handleClickBurger }) => {
  return (
    <BurgerButton
      type="button"
      onClick={handleClickBurger}
    >
      <RxHamburgerMenu />
    </BurgerButton>
  );
};
