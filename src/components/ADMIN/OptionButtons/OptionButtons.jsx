import React from 'react';

import { useRouter } from 'next/router';
import { ListButtonsStyled, OptionBtnStyled } from './OptionButtons.styled';

export const OptionButtons = ({ deleteCheckedDate }) => {
  const router = useRouter();

  const handleDelete = async () => {
    deleteCheckedDate();
  };

  return (
    <ListButtonsStyled>
      <li key="create">
        <OptionBtnStyled
          type="button"
          onClick={() => router.push('category/create')}
        >
          Створити категорію
        </OptionBtnStyled>
      </li>
      <li key="update">
        <OptionBtnStyled type="button">Редагувати</OptionBtnStyled>
      </li>
      <li key="delete">
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
