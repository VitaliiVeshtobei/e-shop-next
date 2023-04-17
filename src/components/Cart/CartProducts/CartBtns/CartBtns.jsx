import React from 'react';
import { BtnContinue, BtnReset, ListBtns } from './CartBtns.styled';

export const CartBtns = () => {
  return (
    <ListBtns>
      <li>
        <BtnContinue type="button">Продовжити покупки</BtnContinue>
      </li>
      <li>
        <BtnReset type="button">Очистити корзину</BtnReset>
      </li>
    </ListBtns>
  );
};
