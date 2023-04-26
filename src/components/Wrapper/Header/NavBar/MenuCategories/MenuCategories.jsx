import React, { useEffect } from 'react';
import { ItemCategories, ListCategories, ListCategoriesContainer, LinkStyled } from './MenuCategoriesStyled';

const MenuCategories = ({ handleClick, data, nameButton }) => {
  useEffect(() => {
    window.addEventListener('wheel', noScroll, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('touchmove', noScroll, { passive: false });

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', noScroll);
      document.removeEventListener('touchmove', noScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const noScroll = (e) => {
    e.preventDefault();
  };

  const onKeyDown = (e) => {
    if (e.code === 'Escape') {
      handleClick();
    }
  };
  return (
    <>
      <ListCategoriesContainer>
        <ListCategories>
          {data.map((item) => (
            <ItemCategories key={item.id}>
              <LinkStyled
                href={nameButton === 'Menu' ? item.path : { pathname: '/products', query: { category: item.id } }}
              >
                {nameButton === 'Menu' ? item.category : item.name_multilang.uk}
              </LinkStyled>
            </ItemCategories>
          ))}
        </ListCategories>
      </ListCategoriesContainer>
    </>
  );
};

export default MenuCategories;
