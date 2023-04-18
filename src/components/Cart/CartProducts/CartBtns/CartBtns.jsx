import React from 'react';
import { BtnContinue, BtnReset, ListBtns } from './CartBtns.styled';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { resetCart } from '@/redux/products/slice';

export const CartBtns = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <ListBtns>
      <li>
        <BtnContinue
          type="button"
          onClick={() => {
            router.back();
          }}
        >
          Продовжити покупки
        </BtnContinue>
      </li>
      <li>
        <BtnReset
          type="button"
          onClick={() => {
            dispatch(resetCart());
          }}
        >
          Очистити корзину
        </BtnReset>
      </li>
    </ListBtns>
  );
};
