import React, { useState } from 'react';

import { Container } from './SearchStyled';

import { Cart } from './Cart/Cart';
import { Form } from './Form/Form';
import { Logo } from './Logo/Logo';
import { Catalog } from './Catalog/Catalog';
import { MenuCategories } from './Catalog/MenuCategories/MenuCategories';

const Search = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleClick = () => {
    setShowCategories((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Logo />
        <Catalog handleClick={handleClick} />
        <Form />
        <Cart />
      </Container>
      {showCategories && <MenuCategories handleClick={handleClick} />}
    </>
  );
};

export default Search;
