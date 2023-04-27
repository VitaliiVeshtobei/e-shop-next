import React, { useState } from 'react';

import { ButtonCategories } from './Catalog.styled';

export const Catalog = ({ handleClick }) => {
  return (
    <ButtonCategories
      name="Categories"
      type="button"
      onClick={handleClick}
    >
      Каталог товарів
    </ButtonCategories>
  );
};
