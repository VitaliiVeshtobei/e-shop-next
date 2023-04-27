import React, { useState } from 'react';

import { Container } from './SearchStyled';

import { Cart } from './Cart/Cart';
import { Form } from './Form/Form';
import { Logo } from './Logo/Logo';
import { Catalog } from './Catalog/Catalog';
import { MenuCategories } from './MenuCategories/MenuCategories';
import { Burger } from './Burger/Burger';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

const Search = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleClickCatalog = () => {
    setShowCategories((prev) => !prev);
  };
  const handleClickBurger = () => {
    setShowBurgerMenu((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Burger handleClickBurger={handleClickBurger} />
        <Logo />
        <Catalog handleClickCatalog={handleClickCatalog} />
        <Form />
        <Cart />
      </Container>
      {showCategories && <MenuCategories handleClickCatalog={handleClickCatalog} />}
      {showBurgerMenu && <BurgerMenu handleClickBurger={handleClickBurger} />}
    </>
  );
};

export default Search;
