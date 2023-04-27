import React, { useEffect } from 'react';
import { Backdrop } from './BurgerMenu.styled';

export const BurgerMenu = ({ handleClickBurger }) => {
  useEffect(() => {
    window.addEventListener('wheel', noScroll, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('touchmove', noScroll, { passive: false });

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', noScroll);
      document.removeEventListener('touchmove', noScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const noScroll = (e) => {
    e.preventDefault();
  };

  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      handleClickBurger();
    }
  };
  return <Backdrop onClick={handleClickBurger}></Backdrop>;
};
