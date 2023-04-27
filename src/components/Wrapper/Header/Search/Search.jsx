import React, { useState } from 'react';

import { IoPersonOutline } from 'react-icons/io5';

import { Container, UserBtn } from './SearchStyled';

import { Cart } from './Cart/Cart';
import { Form } from './Form/Form';
import { Logo } from './Logo/Logo';
import { Catalog } from './Catalog/Catalog';
import { MenuCategories } from './MenuCategories/MenuCategories';
import { Burger } from './Burger/Burger';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import Authorization from '@/components/AuthorizationModal/Authorization';

const Search = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickCatalog = () => {
    setShowCategories((prev) => !prev);
  };
  const handleClickBurger = () => {
    setShowBurgerMenu((prev) => !prev);
  };

  const onUserClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Container>
        <Burger handleClickBurger={handleClickBurger} />
        <Logo />
        <Catalog handleClickCatalog={handleClickCatalog} />
        <Form />
        <UserBtn onClick={onUserClick}>
          <IoPersonOutline />
        </UserBtn>
        <Cart />
      </Container>
      {showCategories && <MenuCategories handleClickCatalog={handleClickCatalog} />}
      {showBurgerMenu && <BurgerMenu handleClickBurger={handleClickBurger} />}
      {modalOpen && <Authorization onClose={onUserClick} />}
    </>
  );
};

export default Search;
