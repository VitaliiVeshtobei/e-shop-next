import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../../../redux/products/selectors';
import MenuCategories from './MenuCategories/MenuCategories';

import { ButtonCategories, Container, ListContainer, ItemContainer, LinkStyled } from './NavBarStyled';

const menu = [
  {
    id: 1,
    category: 'Головна',
    path: '/',
  },
  {
    id: 2,
    category: 'Всі товари',
    path: '/products',
  },
  {
    id: 3,
    category: 'Відгуки',
    path: '/products',
  },
  {
    id: 4,
    category: 'Контакти',
    path: '/products',
  },
  {
    id: 5,
    category: 'Про нас',
    path: '/products',
  },
  {
    id: 6,
    category: 'Доставка і оплата',
    path: '/products',
  },
];

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [nameButton, setNameButton] = useState(null);

  const data = useSelector(selectCategories);

  const handleClick = (e) => {
    const btn = e.target.name;
    // if (btn) {
    //   setShowCategories((prev) => !prev);
    // }
    if (showCategories && btn !== nameButton) return;
    setNameButton(btn);
    setShowCategories((prev) => !prev);
  };
  return (
    <>
      <Container>
        <ButtonCategories
          name="Categories"
          type="button"
          onClick={handleClick}
        >
          Каталог товарів
        </ButtonCategories>
        <ButtonCategories
          name="Menu"
          type="button"
          onClick={handleClick}
        >
          Меню
        </ButtonCategories>
        <ListContainer>
          {menu.map((item) => (
            <ItemContainer key={item.id}>
              <LinkStyled href={item.path}>{item.category}</LinkStyled>
            </ItemContainer>
          ))}
        </ListContainer>
      </Container>
      {showCategories && (
        <MenuCategories
          handleClick={handleClick}
          data={nameButton === 'Menu' ? menu : data}
          nameButton={nameButton}
        />
      )}
    </>
  );
};

export default NavBar;
