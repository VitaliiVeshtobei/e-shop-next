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
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '@/redux/user/selectors';
import { logOut } from '@/redux/user/operations';

const Search = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleClickCatalog = () => {
    if (showBurgerMenu) handleClickBurger();
    setShowCategories((prev) => !prev);
  };
  const handleClickBurger = () => {
    if (showCategories) handleClickCatalog();
    setShowBurgerMenu((prev) => !prev);
  };

  const onUserClick = () => {
    if (isLoggedIn) {
      dispatch(logOut());
      return;
    }
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Container>
        <Burger
          handleClickBurger={handleClickBurger}
          showBurgerMenu={showBurgerMenu}
        />
        <Logo />
        <Catalog handleClickCatalog={handleClickCatalog} />
        <Form />
        <UserBtn onClick={onUserClick}>
          <IoPersonOutline /> <span>{isLoggedIn ? 'Вийти' : 'Увійти'}</span>
        </UserBtn>
        <Cart />
      </Container>
      {showCategories && <MenuCategories handleClickCatalog={handleClickCatalog} />}
      {modalOpen && <Authorization onClose={() => setModalOpen(!modalOpen)} />}
      {showBurgerMenu && (
        <BurgerMenu
          onUserClick={onUserClick}
          handleClickBurger={handleClickBurger}
          handleClickCatalog={handleClickCatalog}
        />
      )}
    </>
  );
};

export default Search;
