import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../../../redux/products/selectors';
import MenuCategories from '../Search/Catalog/MenuCategories/MenuCategories';
import navigation from '../../../../../public/bd/navigation.json';

import { ButtonCategories, Container, ListContainer, ItemContainer, LinkStyled, Backdrop } from './NavBarStyled';

const NavBar = () => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Container>
          <div>
            <ButtonCategories
              name="Categories"
              type="button"
              onClick={handleClick}
            >
              Каталог товарів
            </ButtonCategories>
            {showCategories && (
              <MenuCategories
                handleClick={handleClick}
                data={nameButton === 'Menu' ? navigation : categories}
                nameButton={nameButton}
              />
            )}
          </div>
          <ButtonCategories
            name="Menu"
            type="button"
            onClick={handleClick}
          >
            Меню
          </ButtonCategories>
          <ListContainer>
            {navigation.map((item) => (
              <ItemContainer key={item.id}>
                <LinkStyled
                  href={item.path}
                  path={path}
                >
                  {item.category}
                </LinkStyled>
              </ItemContainer>
            ))}
          </ListContainer>
        </Container>
        {/* {showCategories && } */}
      </div>
    </>
  );
};

export default NavBar;
