import React from 'react';

import { FormStyled, InputStyled, ButtonStyled } from './Form.styled';

export const Form = () => {
  const handlerSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <FormStyled onSubmit={handlerSubmit}>
      <InputStyled
        type="text"
        placeholder="Я шукаю..."
      />
      <ButtonStyled type="submit">Знайти</ButtonStyled>
    </FormStyled>
  );
};
