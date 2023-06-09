import React from 'react';
import { ListButtonsStyled, OptionBtnStyled } from './ListButtons.styled';
import { useRouter } from 'next/router';

export const ListButtons = () => {
  const router = useRouter();
  return (
    <ListButtonsStyled>
      <li>
        <OptionBtnStyled
          type="button"
          onClick={() => router.push('category/create')}
        >
          Створити категорію
        </OptionBtnStyled>
      </li>
      <li>
        <OptionBtnStyled type="button">Редагувати</OptionBtnStyled>
      </li>
      <li>
        <OptionBtnStyled type="button">Видалити</OptionBtnStyled>
      </li>
    </ListButtonsStyled>
  );
};
