import React from 'react';

import { ButtonCategories } from './Catalog.styled';

export const Catalog = ({ handleClickCatalog }) => {
  return (
    <ButtonCategories
      name="Categories"
      type="button"
      onClick={handleClickCatalog}
    >
      Каталог товарів
    </ButtonCategories>
  );
};
