import React from 'react';
import { ListStyled } from './HeaderList.styled';

export const HeaderList = () => {
  return (
    <ListStyled>
      <li>
        <p>Товар</p>
      </li>
      <li>
        <p>Ціна</p>
      </li>
      <li>
        <p>Кількість</p>
      </li>
      <li>
        <p>Сума</p>
      </li>
    </ListStyled>
  );
};
