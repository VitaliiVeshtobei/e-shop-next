import React from 'react';
import { ListButtonsStyled, OptionBtnStyled } from './ListButtons.styled';
import { useRouter } from 'next/router';

export const ListButtons = ({ deleteCheckedDate }) => {
  const router = useRouter();

  const handleDelete = async () => {
    deleteCheckedDate();
  };
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
        <OptionBtnStyled
          onClick={handleDelete}
          type="button"
        >
          Видалити
        </OptionBtnStyled>
      </li>
    </ListButtonsStyled>
  );
};
